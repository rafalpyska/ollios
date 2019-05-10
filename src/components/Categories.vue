<template lang="html">
  <section class="search__container">
    <main class="category__main">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <AppLoadingSpinner
        v-if="status"
      />
      <!--      <Search/>-->

      <section class="search-local">
        <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
        <label class="search__label" for="search-input">Type product that you are looking for</label>
      </section>

      <transition-group
        tag="section"
        class="products"
        name="list"
        @before-leave="beforeLeave"
      >
        <Product
          v-for="item in filterProducts"
          v-if="item.category === $route.fullPath"
          :item="item"
          class="products__item"
          :class="'products__item--' + item.id"
          :key="item.id"
          :categories="categories"
        />
      </transition-group>
    </main>

    <router-view
      v-for="item in products"
      :item="item"
      :key="item.id"
      :products="products"
    />
  </section>
</template>

<script>
  import AppLoadingSpinner from "./AppLoadingSpinner";
  import Product from "./Product";
  import ProductDetails from "./ProductDetails";
  import filterProducts from "../mixins/filterProducts";

  export default {
    name: 'Categories',
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
    mixins: [filterProducts],
    data() {
      return {
        status: false,
        itemDetails: null,
        searchValue: '',
      }
    },
    methods: {
      beforeLeave(el) {
        const {marginLeft, marginTop, width, height} = window.getComputedStyle(el);
        el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
        el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
        el.style.width = width;
        el.style.height = height;
      }
    }
  };
</script>

<style lang="scss">

</style>
