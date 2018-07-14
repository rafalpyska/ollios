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

<style scoped lang="scss">

  [v-cloak] {
    display: none;
  }

  .main {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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
