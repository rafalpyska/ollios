<template lang="html">

  <div class="container" v-cloak>

    <Navigation/>

    <transition name="slide-in" mode="out-in">
      <router-view></router-view>
    </transition>

    <CategoriesToggle/>

    <CategoriesMenu/>

    <ShoppingCart/>

    <Search/>

  </div>

</template>

<script>

  import Navigation from "./Navigation";
  import Main from "./Main";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";
  import LivingRoom from "./LivingRoom";
  import ShoppingCart from "./ShoppingCart";

  export default {
    name: "Home",
    components: {
      ShoppingCart,
      Navigation,
      Main,
      CategoriesToggle,
      CategoriesMenu,
      Search,
      LivingRoom
    },
    data() {
      return {
      }
    }
  };
</script>

<style lang="scss">

  [v-cloak] {
    display: none;
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

  .btn {
    border: none;
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 35, 255, .9);
    padding: 1rem 3rem;
    border-radius: 2rem;
    margin-top: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
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

</style>
