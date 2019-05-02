<template lang="html">
  <div class="container">
    <main class="category__main" v-if="!isOpened">

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
      :data="dataToDisplay"
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

<style lang="scss">

</style>
