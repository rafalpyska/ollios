<template lang="html">
  <div class="container">
    <Navigation />
    <h1>TEST</h1>
    <CategoriesMenu />

  </div>
</template>

<script>

  import Navigation from "./Navigation";
  import CategoriesMenu from "./CategoriesMenu";

  export default {
    name: "Categories",
    components: {
      Navigation,
      CategoriesMenu
    }
  };
</script>

<style scoped lang="css">
</style>
