<template lang="html">

  <div class="container" v-cloak>

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

    <Search/>

  </div>

</template>

<script>
  import axios from 'axios';
  import Navigation from "./Navigation";
  import Main from "./Main";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";
  import LivingRoom from "./LivingRoom";
  import Office from "./Office";
  import ShoppingCart from "./ShoppingCart";

  const API = '/static/products.json';

  export default {
    name: "Home",
    components: {
      ShoppingCart,
      Navigation,
      Main,
      CategoriesToggle,
      CategoriesMenu,
      Search,
      LivingRoom,
      Office
    },
    data() {
      return {
        categories: null,
        products: null,
        status: true
      }
    },
    mounted() {
      axios.get(API)
        .then((response) => {
          this.categories = response.data[0];
          this.products = this.getProductsInfo();
          this.status = false;
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
    }
  };
</script>

<style lang="scss">

  [v-cloak] {
    display: none;
  }

  .ovHidden {
    overflow: hidden;
  }

  .cart-modal, .search-modal {
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

  .category__main {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 8rem 2rem 16rem;
    background-color: rgba(240, 240, 240, 1);
  }

  .products {
    display: grid;
    grid-template-columns: 23% 1fr 23% 23%;
    grid-gap: 2rem;
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

</style>
