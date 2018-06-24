<template>
  <div id="app">
    <!-- <img src="./assets/background.png"> -->
    <!-- <router-view/> -->
    <header>
      <slot name="main-navigation"></slot>
      <slot name="product-navigation"></slot>
    </header>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
