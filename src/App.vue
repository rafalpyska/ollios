<template>
  <div id="app">
    <!-- <img src="./assets/background.png"> -->
    <!-- <router-view/> -->

    <div class="container">
      <header>
        <navigation />
      </header>
      <main>
        <slot></slot>
      </main>
      <aside>
        <slot name="product-navigation"></slot>
      </aside>
    </div>
  </div>
</template>

<script>

  import Navigation from "./components/Navigation";

  export default {
    name: 'App',
    components: {
      Navigation
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
  width: 100%;
  height: 100vh;
  background-image: url('./assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
