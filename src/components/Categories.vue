<template lang="html">
  <div class="container">
    <main class="category__main">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <AppLoadingSpinner
        v-if="status"
      />
      <!--      <Search/>-->

      <section class="search">
        <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
        <label class="search__label" for="search-input">Type product that you are looking for</label>
      </section>

      <transition-group tag="section" class="products" name="list">
        <Product
          v-for="item in filteredData"
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
  </div>
</template>

<script>
  import AppLoadingSpinner from "./AppLoadingSpinner";
  import Product from "./Product";
  import ProductDetails from "./ProductDetails";
  import Search from "./Search";

  export default {
    name: 'Categories',
    components: {
      Search,
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
        status: false,
        itemDetails: null,
        searchValue: '',
      }
    },
    computed: {
      filteredData() {
        if(this.products) {
          return this.products.filter((item) => {
            return item.title.toLowerCase().match(this.searchValue.toLowerCase());
          })
        }
      }
    }
  };
</script>

<style lang="scss">

  .search {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    &__input {
      font-family: 'Lato', sans-serif;
      font-size: 4rem;
      font-weight: 100;
      text-transform: uppercase;
      border: 0;
      border-bottom: 1px solid rgba(177, 177, 177, .9);
      background-color: transparent;
      padding: 1.5rem;
      width: 70%;
      margin-bottom: 1rem;
      &:focus {
        outline: 2px solid rgba(0, 35, 255, 1);
      }
    }
    &__label {
      color: rgba(177, 177, 177, .9);
    }
  }

</style>
