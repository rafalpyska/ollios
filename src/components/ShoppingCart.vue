<template lang="html">
  <transition name="slide-fade">
    <section v-show="isToggle" class="container">
      <ul>
        <li
          v-for="(product) of cart"
        >
          {{ product.productName }}{{ product.quantity }}
        </li>
      </ul>
    </section>
  </transition>
</template>

<script>
  import {EventBus} from "@/event-bus.js";

  export default {
    name: "ShoppingCart",
    data() {
      return {
        isToggle: false,
        cart: []
      }
    },
    created() {
      EventBus.$on('update-cart', (product, quantity) => {
        let {name: productName} = product;
        let orderDetails = {productName, quantity};
        this.cart.push(orderDetails);
      });
      EventBus.$on('isActiveCart', (active) => {
        this.isToggle = active;
      });
    }
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
    background-color: rgba(255, 255, 255, .9);
    z-index: 2;
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
