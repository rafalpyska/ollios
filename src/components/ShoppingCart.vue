<template lang="html">
  <section class="container">
    <ul>
      <li
        v-for="(product) of cart"
      >
        {{ product.productName }}{{ product.quantity }}
      </li>
    </ul>
  </section>
</template>

<script>
  import {EventBus} from "@/event-bus.js";

  export default {
    name: "ShoppingCart",
    data() {
      return {
        cart: []
      }
    },
    beforeMount() {
      EventBus.$on('update-cart', (product, quantity) => {
        let {name: productName} = product;
        let orderDetails = {productName, quantity};
        this.cart.push(orderDetails);
        console.log(this.cart);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 240, 240, 1);
  }
</style>
