<template>
  <div id="app">
    <!-- <img src="./assets/background.png"> -->
    <!-- <router-view/> -->

    <div class="container">
      <header class="header">
        <navigation />
      </header>
      <main class="main">
        <content />
      </main>
      <aside class="aside">
        <categories />
      </aside>
    </div>
  </div>
</template>

<script>

  import Navigation from "./components/Navigation";
  import Main from "./components/Content";
  import Categories from "./components/Categories";

  export default {
    name: 'App',
    components: {
      Navigation,
      Main,
      Categories
    }
  };
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
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
  flex: 0 0 20%;
  flex-direction: column;
}
.main {
  flex: 1;
}
.aside {
  display: none;
}
</style>
