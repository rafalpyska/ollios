<template lang="html">
  <transition name="slide-fade">
    <section class="search-modal">
      <button @click="close()" class="close close-search">X</button>
      <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
      <label class="search__label" for="search-input">Type product that you are looking for</label>
      <div class="search__result-container">
        <div v-if="filterProducts.length < products.length" class="search__result">
          <article class="products__item" v-for="product in filterProducts">
            <p>{{ product.title }}</p>
            <p>{{ product.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
  import filterProducts from "../mixins/filterProducts";
  import Product from "./Product"

  export default {
    name: "Search",
    components: {
      Product
    },
    props: {
      categories :{
        type: Object,
        required: true
      },
      products :{
        type: Array,
        required: true
      }
    },
    mixins: [filterProducts],
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
  .products {
    &__item {
      margin: 0;
      padding: 2rem;
      background-color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
  }
</style>
