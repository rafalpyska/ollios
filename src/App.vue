<template>

  <div id="app" v-cloak>

    <div class="container">
      <Navigation />
      <home>
        <h1 class="title" slot="title">Olios</h1>
        <h2 class="text" slot="text">Newest furniture shop template</h2>
      </home>
      <CategoriesMenu />
      <Search />
    </div>
  </div>

</template>

<script>

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

<style lang="css">

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
    overflow: hidden;
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
