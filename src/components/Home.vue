<template lang="html">
  <div class="container" v-cloak>

    <Navigation />

    <main class="main">
      <div class="content">
        <h1 class="title">Olios</h1>
        <h2 class="text">Newest furniture shop template</h2>
        <button class="btn__view-more">View more</button>
        <CategoriesToggle />
      </div>
    </main>

    <CategoriesMenu />
    <Search>
      <router-view></router-view>
    </Search>
</div>
</template>

<script>

  import Navigation from "./Navigation";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";

  export default {
    name: "Home",
    data() {
      return {
      }
    },
    components:{
      Navigation,
      CategoriesToggle,
      CategoriesMenu,
      Search
    }
  };
</script>

<style scoped lang="css">

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
