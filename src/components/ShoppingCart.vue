<template lang="html">
  <transition name="slide-fade">
    <section v-show="isToggle" class="container">
      <button @click="close()" class="close close-cart">X</button>
      <div class="cart__wrapper">
        <h1 class="section__title">Shopping Cart</h1>
        <p>Your basket is empty!</p>
        <div class="cart" v-for="(item, index) in cart">
          <div class="cart__image-container">
            <img class="cart__image" :src="getImgUrl(item.image)" alt="">
          </div>
          <div class="cart__product cart__product-info">
            <div class="cart__product cart__product-title">
              <p class="item__title">Product: {{ item.title }}</p>
            </div>
            <div class="cart__product cart__product-quantity">
              <label for="cart-quantity">Quantity</label>
              <input class="input__quantity" id="cart-quantity" max="10" min="1" name="cart-quantity" type="number"
                     v-model.number="item.quantity">
            </div>
          </div>
          <div class="cart__product cart__product-price">
            <p class="item__price">Price for a single item: ${{ item.price }}</p>
          </div>
          <div class="cart__product cart__product-price">
            <Btn @click.native="removeItem(index)">Remove</Btn>
          </div>
        </div>
        <div class="cart__summary">
          <p class="item__price">Total: ${{ total }}</p>
        </div>
      </div>


    </section>
  </transition>
</template>

<script>
  import {EventBus} from "@/event-bus.js";
  import getImageUrl from '../mixins/getImageUrl'
  import Btn from "./Btn"

  export default {
    name: "ShoppingCart",
    components: {
      Btn
    },
    data() {
      return {
        isToggle: false,
        cart: null
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
            return newItem;
          }
          return oldItem;
        });
        if (!found) {
          this.cart = this.cart.concat(item)
        }
      });
      EventBus.$on('isActiveCart', (active) => {
        this.isToggle = active;
      });
    },
    computed: {
      total() {
        let total = 0;
        if(this.cart && this.cart.length) {
          this.cart.forEach((item) => {
            total += (item.price * item.quantity);
          });
          return total;
        }
      }
    },
    methods: {
      removeItem(index) {
        this.cart.splice(index, 1);
      },
      close() {
        this.isToggle = false;
        EventBus.$emit('cartClosed', this.isToggle);
      }
    },
    mixins: [getImageUrl]
  }
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    z-index: 10;
    font-weight: 300;
  }

  .cart {
    &:nth-child(odd) {
      background-color: rgba(231, 231, 231, .3);
    }
    &__wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 50%;
    }
    display: flex;
    width: 100%;
    height: 10rem;
    background-color: rgba(255, 255, 255, .9);

    &:not(:first-child) {
      margin-top: 1rem;
    }

    &__image {
      &-container {
        height: 100%;
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

  .input__quantity {
    margin-left: 10px;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all .4s ease;
  }

  .slide-fade-enter {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translateY(-100%);
  }

</style>
