<template lang="html">
  <transition name="slide-fade">
    <section class="cart">
      <button @click="close()" class="close close-cart">X</button>
      <transition-group tag="div" class="cart__wrapper" name="list" v-if="cart.length > 0">
        <!-- <h1 :key="3213" class="section__title">Shopping Cart</h1>
        <p :key="3214" class="cart__empty" v-if="empty">Your basket is empty!</p> -->
        <div class="cart" v-for="(item, index) in cart" :key="index">
          <div class="cart__image-container">
            <!-- <img class="cart__image" :src="`http://localhost:1337${item.image.url}`" alt=""> -->
          </div>
          <div class="cart__product cart__product-info">
            <div class="cart__product cart__product-title">
              <p class="item__title">Product: {{ item.product.title }}</p>
            </div>
            <div class="cart__product cart__product-quantity">
              <label for="cart-quantity">Quantity</label>
              <input class="input__quantity input__quantity--cart" id="cart-quantity" max="10" min="1"
                     name="cart-quantity" type="number"
                     v-model.number="item.quantity">
            </div>
          </div>
          <div class="cart__product cart__product-price">
            <p class="item__price">Price for a single item: ${{ item.product.price }}</p>

          </div>
          <div class="cart__product cart__product-price">
            <AppButton @click.native="removeItem(index)">Remove</AppButton>
          </div>
        </div>
        <!-- <div :key="3215" v-if="!empty" class="cart__summary">
          <p class="item__price">Total: ${{ totalPrice }}</p>
        </div> -->
      </transition-group>
    </section>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex';
  import AppButton from "@/components/AppButton"

  export default {
    name: "ShoppingCart",
    components: {
      AppButton
    },
    computed: {
    ...mapGetters(['cart', 'cartTotalItemPrice'])
    },
    methods: {
      removeItemFromCart(item) {
        this.$store.dispatch('removeItemFromCart', item);
      },
      close() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: var(--white);
      font-weight: 300;
    &:nth-child(odd) {
      background-color: rgba(231, 231, 231, .3);
    }
    &__wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 50%;
      @media only screen and (max-width: 64em) {
        width: 75%;
      }
      @media only screen and (max-width: 48em) {
        width: 100%;
        padding: 0 2rem;
      }
    }
    @media only screen and (max-width: 48em) {
      flex-wrap: wrap;
    }

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
        @media only screen and (max-width: 48em) {
          order: 1;
        }
      }

      &-quantity {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: baseline;

      }

      &-price {
        margin-left: auto;
        @media only screen and (max-width: 48em) {
          order: 3;
        }
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

    &__price {
      font-size: 1.8rem;
    }
  }

  .input__quantity--cart {
    margin-left: 2rem;
    border: 1px solid var(--blue);
  }

</style>
