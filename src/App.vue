<template>

  <div id="app" v-cloak>

    <div class="container">
      <Navigation />
      <home>
        <h1 class="title" slot="title">Olios</h1>
        <h2 class="text" slot="text">Newest furniture shop template</h2>
      </home>
      <CategoriesMenu />
      <!-- v-if="isActive" @toggleCategoriesMenu="isActice = !isActive"  -->
      <!-- <transition name="fade">
        <router-view></router-view>
      </transition> -->
    </div>


  </div>

</template>

<script>
  import { EventBus } from "@/event-bus.js";
  import Navigation from "./components/Navigation";
  import Home from "./components/Home";
  import CategoriesMenu from "./components/CategoriesMenu";
  import Search from "./components/Search";

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
      Navigation,
      Home,
      CategoriesMenu,
      Search
    }
  };
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  [v-cloak] {
    display: none;
  }
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
  }


  .main {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    background-image: url('./assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .title,
  .text {
    font-weight: 100;
    margin: 0;
    padding: .75rem;
  }

  .title {
    margin-top: 5rem;
    font-size: 8rem;
  }
  .categories__link {
    display: flex;
  }
</style>
