<template lang="html">

    <div class="container" v-cloak>
      <Navigation />

      <main class="main">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
        <CategoriesToggle />
      </main>

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

<style scoped lang="css">

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

</style>
