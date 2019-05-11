<template lang="html">
  <transition name="slide-fade">
    <section class="search">
      <button @click="close()" class="close close-search">X</button>
      <form class="search__controls">
        <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
        <label class="search__label" for="search-input">Type product that you are looking for</label>
      </form>
      <transition-group
          v-if="filterProducts.length < products.length"
          tag="section"
          class="products"
          name="list"
        >
        <Product
          v-for="item in filterProducts"
          :item="item"
          class="products__item"
          :class="'products__item--' + item.id"
          :key="item.id"
        />
        </transition-group>
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

<style scoped lang="scss">

</style>
