<template lang="html">
  <div class="container">
    <main class="main" v-if="!isProductDetailsOpen">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <LoadingSpinner v-if="status"/>

      <transition-group tag="section" class="products" name="list">
        <Product
          v-for="item in dataToDisplay"
          :item="item"
          :images="images"
          class="products__item"
          :class="'products__item--' + item.id"
          :key="item.id"
          @click.native="handleProductDetails(item)"
        />
      </transition-group>

      <button v-show="showButton" ref="btnLoadMore" @click="loadMore" class="btn__load-more">Show more products</button>
    </main>

    <transition name="fade" mode="out-in">
      <ProductDetails
        v-if="isProductDetailsOpen"
        :item="itemDetails"
        :images="images"
        @closeDetails="isProductDetailsOpen = false"/>
    </transition>

  </div>
</template>

<script>

  import LoadingSpinner from "./LoadingSpinner";
  import axios from 'axios';
  import Product from "./Product";
  import ProductDetails from "./ProductDetails";
  const API = 'https://jsonplaceholder.typicode.com/users';

  export default {
    name: 'LivingRoom',
    data() {
      return {
        status: true,
        dataReceived: [],
        dataToDisplay: [],
        itemDetails: null,
        isProductDetailsOpen: false,
        showButton: true,
        images: 'http://via.placeholder.com/350x150'
      }
    },
    components: {
      LoadingSpinner,
      Product,
      ProductDetails
    },
    created() {
      axios.get(API)
        .then((response) => {
          this.dataReceived = response.data;
          this.dataToDisplay = this.dataReceived.slice(0, 6);
          this.status = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      loadMore() {
        this.dataToDisplay = this.dataReceived.slice(0, 20);
        this.showButton = false;
      },
      handleProductDetails(item) {
        this.isProductDetailsOpen = true;
        this.itemDetails = item;
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
    grid-template-rows: repeat(2, 1fr);
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
    transition: all .4s;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }



</style>
