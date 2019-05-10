<template>

  <section id="app" v-cloak>

    <Navigation/>

    <transition name="slide-in" mode="out-in">
      <router-view
        v-if="!status"
        :categories="categories"
        :products="products"
      />
    </transition>

    <CategoriesToggle/>

    <CategoriesMenu/>

    <ShoppingCart/>

  </section>

</template>

<script>

  import axios from 'axios';
  import {EventBus} from "@/event-bus.js";
  import Navigation from "./components/Navigation";
  import Home from "./components/Home";
  import CategoriesToggle from "./components/CategoriesToggle";
  import CategoriesMenu from "./components/CategoriesMenu";
  import ShoppingCart from "./components/ShoppingCart";
  import Search from "./components/Search";

  const API = '/static/products.json';

  export default {
    name: "App",
    components: {
      Navigation,
      Home,
      CategoriesToggle,
      CategoriesMenu,
      ShoppingCart,
      Search
    },
    data() {
      return {
        categories: null,
        products: null,
        status: true
      }
    },
    mounted() {
      // Fetch categories and products
      axios.get(API)
        .then((response) => {
          this.categories = response.data[0];
          this.products = this.getProductsInfo();
          this.status = false;
          EventBus.$emit('products', this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      getProductsInfo() {
        return Object.values(this.categories.category).map(category => {
          let myProducts;
          return myProducts = Object.values(category.products);
        }).flat()
      }
    },
  };
</script>

<style lang="scss">

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  [v-cloak] {
    display: none;
  }

  .ovHidden {
    overflow: hidden;
  }

  .search,
  .cart {
    &-modal {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 1);
      z-index: 10;
      font-weight: 300;
    }
  }

  .search {
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
    }
    &__label {
      color: rgba(177, 177, 177, .9);
    }
    &__result {
      &-container {
        display: flex;
      }
    }
  }

  .category__main {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 8rem 2rem 16rem;
    background-color: rgba(240, 240, 240, 1);
  }

  .products {
    display: grid;
    grid-template-columns: 23% 1fr 23% 23%;
    grid-gap: 3rem;
    pointer-events: none;
    & > * {
      pointer-events: auto;
      transition: .3s opacity, .3s transform;
    }
    &:hover > *,
    &:focus-within > * {
      opacity: 0.4;
    }
    &:hover > :hover,
    &:focus-within > :focus {
      transform: scale(1.02);
      opacity: 1;
    }
    &:hover > :focus:not(:hover) {
      transform: scale(1.01);
    }
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

  .section {
  &__details {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 2rem 0;
     text-transform: uppercase;
   }
  &__title {
     font-size: 2.5rem;
     font-weight: 300;
   }
  &__category {
     font-size: 1rem;
     font-weight: 300;
     color: #c1c1c1;
   }
  }
  .products, .product-details {
    line-height: 30px;
  }

  .close {
    position: absolute;
    top: 2rem;
    left: 1rem;
    width: 25px;
    height: 25px;
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    transition: .2s all;

  &:hover {
     color: rgba(0, 35, 255, 0.9);
   }
  }

  .close-cart, .close-search {
    left: 11rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-in-enter-active {
    transition: all .3s ease;
  }

  .slide-in-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-in-enter, .slide-in-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all .4s ease;
  }

  .slide-fade-enter {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translateY(-100%);
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  .list-leave-active {
    position: absolute;
  }

  .list-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }

</style>
