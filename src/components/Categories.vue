<template lang="html">
  <section class="search__container">
    <main class="category__main">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <form class="search-local">
        <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
        <label class="search__label" for="search-input">Type product that you are looking for</label>
      </form>

      <transition-group
        tag="section"
        class="products"
        name="list"
        @before-leave="beforeLeave"
      >
        <Product
          v-for="item in filterProducts"
          :key="item.id"
          v-if="item.category === $route.fullPath"
          :item="item"
          class="products__item"
          :class="'products__item--' + item.id"
        >
          <p slot="price" slot-scope="props" class="products__price">${{ props.item.price }}</p>
        </Product>
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
  import Product from "./Product";
  import ProductDetails from "./ProductDetails";
  import filterProducts from "../mixins/filterProducts";
  import transitionFix from "../mixins/transitionFix";

  export default {
    name: 'Categories',
    components: {
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
    mixins: [filterProducts, transitionFix],
    data() {
      return {
        status: false,
        itemDetails: null,
        searchValue: '',
      }
    }
  };
</script>

<style lang="scss">

  .products, .product-details {
    line-height: 30px;
  }

  .search {
    &-local {
      display: flex;
      flex-direction: column;
      margin-bottom: 6rem;
    }
  }

</style>
