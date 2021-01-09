<template lang="html">
  <transition name="slide-fade">
    <section class="search">
      <button @click="close()" class="close close-search">X</button>
      <form @submit.prevent class="search__controls">
        <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
        <label class="search__label" for="search-input">Type product that you are looking for</label>
      </form>
      <transition-group
        v-if="filterProducts.length < products.length"
        tag="section"
        class="products"
        name="list"
        @before-leave="beforeLeave"
      >
        <Product
          v-for="item in filterProducts"
          :key="item.id"
          :item="item"
          class="products__item"
          :class="'products__item--' + item.id"
        />
      </transition-group>

      <router-view
        v-for="item in products"
        :item="item"
        :key="item.id"
        :products="products"
      />
    </section>
  </transition>
</template>

<script>
  import Product from "./Product"
  import filterProducts from "../mixins/filterProducts";
  import transitionFix from "../mixins/transitionFix";

  export default {
    name: "Search",
    components: {
      Product
    },
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    mixins: [filterProducts, transitionFix],
    data() {
      return {
        searchValue: ''
      }
    },
    methods: {
      close() {
        this.$router.go(-1);
      },
    }
  };

</script>

<style lang="scss">

  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 2rem 8rem 2rem 14.5rem;
    background-color: rgba(240, 240, 240, .5);;
    font-weight: 300;
    @media only screen and (max-width: 62em) {
      padding: 8rem 22rem 0 12.5rem;
    }
    @media only screen and (max-width: 48em) {
      padding: 2rem 3rem 2rem 3rem;
    }

    &__controls {
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
    }

    &__controls {
      width: 100%;
      align-items: center;
      @media only screen and (max-width: 62em) {
        margin-top: 10rem;
      }
    }
  }

</style>
