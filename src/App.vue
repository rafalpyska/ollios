<template>
  <div id="app" v-cloak>
    <!-- <router-view/> -->

    <div class="container">
      <header class="header">
        <navigation />
      </header>
      <main class="main">
        <home>
          <h1 class="title" slot="title">Olios</h1>
          <h2 class="text" slot="text">Newest furniture shop template</h2>
        </home>
      </main>
      <aside class="aside">
        <CategoriesMenu />
      </aside>
    </div>
  </div>
</template>

<script>

  import Navigation from "./components/Navigation";
  import Home from "./components/Home";
  import CategoriesMenu from "./components/CategoriesMenu";

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    components: {
      Navigation,
      Home,
      CategoriesMenu
    }
  };
</script>

<style>
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
    background-image: url('./assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .header {
    display: flex;
    width: 8%;
    flex: 0 0 8%;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .9);
    box-shadow: 4px 0 5px -2px rgb(0, 0, 0, .1);
  }
  .main {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
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

  .aside {
    display: flex;
    width: 15%;
    flex: 0 0 15%;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .9);
  }
  .categories__link {
    display: flex;
  }
</style>
