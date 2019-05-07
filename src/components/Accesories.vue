<template lang="html">
  <div class="container">
    <main class="category__main">

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
      :products="products"
    />

  </div>
</template>

<script>
  import AppLoadingSpinner from "./AppLoadingSpinner";
  import {EventBus} from "@/event-bus.js";
  import Product from "./Product";
  import ProductDetails from "./ProductDetails";

  export default {
    name: 'Accesories',
    components: {
      AppLoadingSpinner,
      Product,
      ProductDetails
    },
    props: {
      categories: {
        type: Object,
        required: true
      },
      products: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        category: null,
        productsList: null,
        productsParsed: null,
        status: false,
        dataToDisplay: [],
        itemDetails: null,
        isOpened: false,
        // showButton: true,
      }
    },
    created() {
      this.categoriesList = this.categories.category[4];
      this.productsList = this.products;
      for (let key in this.category) {
        if (!this.category.hasOwnProperty(key)) continue;
        this.dataToDisplay = this.category[key];
      }
      EventBus.$on('detailsClosed', (closed) => {
        this.isOpened = closed;
      });
    },
    methods: {
      // loadMore() {
      //   this.showButton = false;
      // },
      handleProductDetails(item) {
        this.isOpened = true;
        EventBus.$emit('isActiveDetails', this.isOpened);
        this.itemDetails = item;
      }
    }
  };
</script>

<style lang="scss">

</style>
