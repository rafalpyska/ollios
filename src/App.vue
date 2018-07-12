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
