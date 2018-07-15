<template lang="html">

    <div class="container" v-cloak>

      <Navigation />

      <transition name="slide-in" mode="out-in">
        <router-view></router-view>
      </transition>

      <CategoriesToggle />

      <CategoriesMenu />

      <Search>
        <router-view></router-view>
      </Search>

    </div>
  </transition>
</template>

<script>

  import Navigation from "./Navigation";
  import Main from "./Main";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";
  import LivingRoom from "./LivingRoom";

  export default {
    name: "Home",
    data() {
      return {
      }
    },
    components: {
      Navigation,
      Main,
      CategoriesToggle,
      CategoriesMenu,
      Search,
      LivingRoom
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
      font-weight: 100;
    }
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
