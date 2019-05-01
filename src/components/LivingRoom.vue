<template lang="html">
  <div class="container">
    <main class="main" v-if="!isOpened">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <LoadingSpinner
        v-if="status"
      />

      <transition-group tag="section" class="products" name="list">
        <Product
          v-for="item in dataToDisplay"
          :item="item"
          class="products__item"
          :class="'products__item--' + item.id"
          :key="item.id"
          @click.native="handleProductDetails(item)"
        />
      </transition-group>

<!--      <button v-show="showButton" ref="btnLoadMore" @click="loadMore" class="btn__load-more">Show more products</button>-->
    </main>

    <ProductDetails
      v-if="isOpened"
      :item="itemDetails"
      :key="itemDetails.id"
      :data="data"
      @close="isOpened = false"
    />

  </div>
</template>

<script>
  import LoadingSpinner from "./LoadingSpinner";
  import axios from 'axios';
  import Product from "./Product";
  import ProductDetails from "./ProductDetails";

  const API = '/static/products.json';

  export default {
    name: 'LivingRoom',
    data() {
      return {
        status: true,
        data: [],
        dataToDisplay: [],
        itemDetails: null,
        isOpened: false,
        // showButton: true,
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
          this.data = response.data[0].category[0];
          for (let key in this.data) {
            if (!this.data.hasOwnProperty(key)) continue;
            this.dataToDisplay = this.data[key];
          }
          this.status = false;
        })
        .catch((error) => {
          console.log(error);
        });

    },
    methods: {
      // loadMore() {
      //   this.showButton = false;
      // },
      handleProductDetails(item) {
        this.isOpened = true;
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
    font-weight: 700;
    transition: all .4s;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
