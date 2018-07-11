<template>

  <div id="app">

      <router-view></router-view>

  </div>

</template>

<script>

  export default {
    name: 'App'
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

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    width: 100%;
    height: 100%;
  }

</style>
