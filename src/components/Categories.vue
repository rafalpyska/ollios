<template lang="html">
  <div class="container">
    <Navigation />
      <main class="main">

      </main>
    <CategoriesToggle />
    <CategoriesMenu />

  </div>
</template>

<script>

  import Navigation from "./Navigation";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";

  export default {
    name: "Categories",
    components: {
      Navigation,
      CategoriesToggle,
      CategoriesMenu,
      Search
    }
  };
</script>

<style scoped lang="css">
  .main {
    flex: 1;
    background-color: rgba(240, 240, 240, 1);
  }
</style>
