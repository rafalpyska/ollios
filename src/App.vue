<template>
  <div id="app" v-cloak>
    <router-view/>

    <div class="container">
      <header class="header">
        <navigation />
      </header>
      <main class="main">
        <home>
          <h1 slot="title">Olios</h1>
          <h2 slot="text">Newest furniture shop template</h2>
        </home>
      </main>
      <aside class="aside">
        <categories />
      </aside>
    </div>
  </div>
</template>

<script>

  import Navigation from "./components/Navigation";
  import Home from "./components/Home";
  import Categories from "./components/Categories";

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    components: {
      Navigation,
      Home,
      Categories
    }
  };
</script>

<style>
  body {
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
  }
  .main {
    flex: 1;
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
