<template>

  <div id="app">

      <Home />

  </div>

</template>

<script>

  import Home from "./components/Home";

  export default {
    name: 'App',
    components: {
      Home
    }
    // data() {
    //   return {
    //   }
    // },
    // methods: {
    // },
    // components: {
    // }
  };
</script>

<style lang="css">

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .slide-fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .side-fade-enter-active {
    opacity: 1;
    transition: all 1s;
  }

  .slide-fade-leave-active {
    transition: all 1s;
    opacity: 0;
    transform: translateX(-100%);
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  .main {
    padding-left: 8rem;
  }

</style>
