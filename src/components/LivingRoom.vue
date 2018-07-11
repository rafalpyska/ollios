<template lang="html">
  <div class="container">
    <Navigation />
      <main class="main">
        <h1>SAMPLE H1</h1>
      </main>
    <CategoriesToggle />
    <CategoriesMenu />
  </div>
</template>

<script>

  import axios from 'axios';
  const API = 'https://jsonplaceholder.typicode.com/photos';

  import Navigation from "./Navigation";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";

  export default {
    name: 'LivingRoom',
    components: {
      Navigation,
      CategoriesToggle,
      CategoriesMenu,
      Search
    }
    // ,
    // created() {
    //     axios.get(API)
    //       .then((response) => {
    //         console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    };
</script>

<style scoped lang="css">
</style>
