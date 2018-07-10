<template lang="html">
  <div class="container" v-cloak>

    <Navigation />

    <main class="main">
      <div class="content">
        <h1 class="title">Olios</h1>
        <h2 class="text">Newest furniture shop template</h2>
        <button class="btn__view-more">View more</button>
        <button @click="categoriesToggle" class="btn__categories-toggle"></button>
      </div>
    </main>

    <CategoriesMenu />
    <Search>
      <router-view></router-view>
    </Search>
</div>
</template>

<script>

  import { EventBus } from "@/event-bus.js";
  import Navigation from "./Navigation";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";

  export default {
    name: "Home",
    data() {
      return {
        isActive: false,
      }
    },
    components:{
      Navigation,
      CategoriesMenu,
      Search
    },
    methods: {
      categoriesToggle() {
        this.isActive = !this.isActive;
        EventBus.$emit('toggleActive', this.isActive);
      }
    }
  };
</script>

<style scoped lang="css">

  .btn__categories-toggle {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 1px #888;
    cursor: pointer;
    z-index: 3;
  }

  .btn__view-more {
    border: none;
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 35, 255, .9);
    padding: 1rem 3rem;
    border-radius: 2rem;
    margin-top: .75rem;
    font-weight: 700;
    cursor: pointer;
  }

  [v-cloak] {
    display: none;
  }
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
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
