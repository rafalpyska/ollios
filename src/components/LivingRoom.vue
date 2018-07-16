<template lang="html">
  <div class="container">
    <main class="main">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <LoadingSpinner v-if="status"/>

      <section class="products">
        <Product v-for="item in moreData" :item="item" :images="images" class="products__item" :class="'products__item--' + item.id" :key="item.id"/>
      </section>

      <button @click="loadMore" class="btn__load-more">Show more products</button>
    </main>
  </div>
</template>

<script>

  import LoadingSpinner from "./LoadingSpinner";
  import axios from 'axios';
  import { EventBus } from "@/event-bus.js";
  import Product from "./Product";
  const API = 'https://jsonplaceholder.typicode.com/users';

  export default {
    name: 'LivingRoom',
    data() {
      return {
        status: true,
        dataReceived: [],
        moreData: [],
        images: 'http://via.placeholder.com/350x150'
      }
    },
    components: {
      LoadingSpinner,
      Product
    },
    created() {
      axios.get(API)
        .then((response) => {
          this.dataReceived = response.data;
          this.moreData = this.dataReceived.slice(0, 6);
          this.status = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      loadMore() {
        this.moreData = this.dataReceived.slice(0, 20);
      }
    }
  };
</script>

<style scoped lang="scss">

  .main {
    width: 100%;
    padding: 2rem 8rem 2rem 16rem;
    background-color: rgba(240, 240, 240, 1);
  }
  .products {
    display: grid;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: 23% 1fr 23% 23%;
    grid-gap: 2rem;
  }
  .btn__load-more {
    display: block;
    border: 0;
    margin: 2rem auto;
    padding: 2rem;
    background: none;
    text-transform: uppercase;
    color: rgba(0, 35, 255, 1);
    cursor: pointer;
    font-size: 1rem;
  }

</style>
