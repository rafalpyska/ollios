<template>

  <section id="app" v-cloak>

    <Navigation/>

    <AppLoadingSpinner
      v-if="status"
    />

    <transition name="slide-in" mode="out-in">
      <router-view
        v-if="!status"
        :categories="categories"
        :products="products"
      />
    </transition>

    <CategoriesMenuToggle/>

    <CategoriesMenu/>

    <ShoppingCart/>

  </section>

</template>

<script>

  import axios from 'axios';
  import {EventBus} from "@/event-bus.js";
  import AppLoadingSpinner from "./components/AppLoadingSpinner";
  import Navigation from "./components/Navigation";
  import Home from "./components/Home";
  import CategoriesMenuToggle from "./components/CategoriesMenuToggle";
  import CategoriesMenu from "./components/CategoriesMenu";
  import ShoppingCart from "./components/ShoppingCart";
  import Search from "./components/Search";

  const API = '/static/products.json';

  export default {
    name: "App",
    components: {
      AppLoadingSpinner,
      Navigation,
      Home,
      CategoriesMenuToggle,
      CategoriesMenu,
      ShoppingCart,
      Search
    },
    data() {
      return {
        status: true,
        categories: null,
        products: null
      }
    },
    mounted() {
      // Fetch categories and products
      axios.get(API)
        .then(( { data } ) => {
          this.categories = data[0];
          this.products = this.getProductsInfo();
          EventBus.$emit('products', this.products);
          setTimeout(() => this.status = false, 500);
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

  :root {
    --white: rgba(255, 255, 255, 1);
    --blue: rgba(0, 35, 255, 1);
    --blue-disabled: rgba(0, 35, 255, .4);
    --gray: rgba(240, 240, 240, 1);
    --black: rgba(0, 0, 0, .9);
    --shadow: rgba(0, 0, 0, .2);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 160.000em) {
      font-size: 50.5%;
    }
    @media only screen and (max-width: 105em) {
      font-size: 42.5%;
    }
    @media only screen and (max-width: 48em) {
    }
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

  .section {
    &__details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      margin-bottom: 5rem;
      @media only screen and (max-width: 48em) {
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 0 0;
      }
      @media only screen and (max-width: 34.125em) {
        display: none;
      }
    }

    &__title {
      font-size: 7.2rem;
      font-weight: 300;
      margin: 0;
      @media only screen and (max-width: 64em) {
        font-size: 5.2rem;
      }
      @media only screen and (max-width: 48em) {
        font-size: 4.5rem;
      }

    }

    &__category {
      font-size: 1.8rem;
      font-weight: 300;
      color: #c1c1c1;
    }
  }

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
      background-color: var(--white);
      z-index: 12;
      font-weight: 300;
    }
  }

  .category__main {
    width: 100%;
    min-height: 100vh;
    padding: 8rem 40rem 2rem 40rem;
    background-color: var(--gray);
    @media only screen and (max-width: 64em) {
      padding: 8rem 17rem 8rem 17rem;
    }
    @media only screen and (max-width: 34.125em) {
      padding: 8rem 13rem 8rem 13rem;
    }
    @media only screen and (max-width: 25em) {
      padding: 8rem 10rem 8rem 10rem;
    }


  }

  .btn__load-more {
    display: block;
    border: 0;
    margin: 2rem auto;
    padding: 2rem;
    background: none;
    text-transform: uppercase;
    color: var(--blue);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    transition: all .4s;
  }

  .close {
    position: absolute;
    top: 8rem;
    left: 8rem;
    width: 3rem;
    height: 3rem;
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 3rem;
    transition: .2s all;
    z-index: 12;
    @media only screen and (max-width: 48em) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: 34.125em) {
      top: 3.5rem;
      left: 4rem;
    }

    &:hover {
      color: rgba(0, 35, 255, 0.9);
    }
  }

  .close-cart, .close-search {
    left: 24rem;
    @media only screen and (max-width: 48em) {
      left: 2rem;
    }
  }

  .input__quantity {
    width: 10rem;
    padding: 1rem 1rem;
    border: 1px solid transparent;
    border-radius: 2.5rem;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
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
      @media only screen and (max-width: 64em) {
        width: 100%;
        padding: 0;
      }

      &:focus {
        outline: 2px solid var(--blue);
      }
    }

    &__label {
      font-size: 1.8rem;
      color: rgba(177, 177, 177, .9);
    }
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
    transition: all .5s ease;
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
    transition: 1s cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.6);
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
