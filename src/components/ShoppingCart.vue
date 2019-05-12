<template lang="html">
  <transition name="slide-fade">
    <section v-show="isToggle" class="cart-modal">
      <button @click="close()" class="close close-cart">X</button>
      <transition-group tag="div" class="cart__wrapper" name="list">
        <h1 :key="3213" class="section__title">Shopping Cart</h1>
        <p :key="3214" class="cart__empty" v-if="empty">Your basket is empty!</p>
        <div class="cart" v-for="(item, index) in cart" :key="item.id">
          <div class="cart__image-container">
            <img class="cart__image" :src="getImgUrl(item.image)" alt="">
          </div>
          <div class="cart__product cart__product-info">
            <div class="cart__product cart__product-title">
              <p class="item__title">Product: {{ item.title }}</p>
            </div>
            <div class="cart__product cart__product-quantity">
              <label for="cart-quantity">Quantity</label>
              <input class="input__quantity input__quantity--cart" id="cart-quantity" max="10" min="1" name="cart-quantity" type="number"
                     v-model.number="item.quantity">
            </div>
          </div>
          <div class="cart__product cart__product-price">
            <p class="item__price">Price for a single item: ${{ item.price }}</p>
          </div>
          <div class="cart__product cart__product-price">
            <AppButton @click.native="removeItem(index)">Remove</AppButton>
          </div>
        </div>
        <div :key="3215" v-if="!empty" class="cart__summary">
          <p class="item__price">Total: ${{ totalPrice }}</p>
        </div>
      </transition-group>
    </section>
  </transition>
</template>

<script>
  import {EventBus} from "@/event-bus.js";
  import getImageUrl from '../mixins/getImageUrl'
  import AppButton from "./AppButton"

  export default {
    name: "ShoppingCart",
    components: {
      AppButton
    },
    mixins: [getImageUrl],
    data() {
      return {
        isToggle: false,
        cart: null,
        empty: true
      }
    },
    computed: {
      totalPrice() {
        let total = 0;
        if(this.cart && this.cart.length) {
          this.cart.forEach((item) => {
            total += (item.price * item.quantity);
          });
          return total;
        } else {
          total = '0';
          return total;
        }
      }
    },
    created() {
      EventBus.$on('update-cart', (item) => {
        const newItem = item[0];
        this.cart = this.cart || [];
        let found = false;
        this.cart = this.cart.map(oldItem => {
          if (oldItem.id === newItem.id) {
            found = true;
            newItem.quantity += oldItem.quantity;
            return newItem;
          }
          return oldItem;
        });
        if (!found) {
          this.cart = this.cart.concat(item)
        }
        this.empty = false;
      });
      EventBus.$on('isActiveCart', (active) => {
        this.isToggle = active;
      });
    },
    beforeDestroy() {
      EventBus.$off('update-cart');
      EventBus.$off('isActiveCart');
    },
    methods: {
      removeItem(index) {
        this.cart[index].quantity = 0;
        this.cart.splice(index, 1);

        if(this.cart.length === 0) {
          this.empty = true;
        }
      },
      close() {
        this.isToggle = false;
        EventBus.$emit('cartClosed', this.isToggle);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart {
    &:nth-child(odd) {
      background-color: rgba(231, 231, 231, .3);
    }
    &__wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 50%;
      @media only screen and (max-width: 48em) {
        width: 100%;
      }
    }
    display: flex;
    width: 100%;
    height: 20rem;
    font-size: 1.8rem;
    background-color: rgba(255, 255, 255, .9);

    &:not(:first-child) {
      margin-top: 1rem;
    }
    &__empty {
      font-size: 1.8rem;
    }
    &__image {
      &-container {
        height: 100%;
        @media only screen and (max-width: 48em) {
          display: none;
        }
      }
      max-width: 100%;
      height: 100%;
    }
    &__product {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
      &-info {
      }
      &-quantity {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: baseline;

      }
      &-price {
        margin-left: auto;
      }
    }
    &__summary {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
  .item {
    &__title {
      font-weight: 700;
    }
  }

  .input__quantity--cart {
    margin-left: 2rem;
    border: 1px solid rgba(0, 35, 255, 0.9);
  }

</style>
