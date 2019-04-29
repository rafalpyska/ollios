<template lang="html">
  <transition name="slide-fade">
    <section v-show="isToggle" class="container">
      <div class="cart__wrapper">
        <h1>Shopping Cart</h1>
        <p>Your basket is empty!</p>
        <div class="cart" v-for="item in cart">
          <div class="cart__image-container">
            <img class="cart__image" :src="getImgUrl(item.image)" alt="">
          </div>
          <div class="cart__product-info">
            <p></p>
            <p class="item__title">Product: {{ item.title }}</p>
            <p class="item__quantity">Quantity: {{ item.quantity }}</p>
          </div>
          <div class="cart__product-price">
            <p class="item__price">${{ item.price }}</p>
            <p class="item__price">Total: ${{ total }}</p>
          </div>

        </div>
      </div>

    </section>
  </transition>
</template>

<script>
  import {EventBus} from "@/event-bus.js";
  import getImageUrl from '../mixins/getImageUrl'

  export default {
    name: "ShoppingCart",
    data() {
      return {
        isToggle: false,
        cart: null
      }
    },
    created() {
      EventBus.$on('update-cart', (item) => {
        this.cart = item;
      });
      EventBus.$on('isActiveCart', (active) => {
        this.isToggle = active;
      });
    },
    computed: {
      total() {
        let total = 0;
        this.cart.forEach((item) => {
          total += (item.price * item.quantity);
        });
        return total;
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
    z-index: 2;
  }

  .cart {
    &:nth-child(odd) {
      background-color: rgba(231, 231, 231, .3);
    }

    &__wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 75%;
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
        width: 30%;
        height: 100%;
      }

      max-width: 100%;
      height: 100%;
    }

    &__product {
      &-info {
        display: flex;
        flex-direction: column;
      }

      &-price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
      }
    }
  }

  .item {
    &__title {
      font-weight: 700;
    }
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
