<template lang="html">
  <div class="container">
    <Navigation />
      <main class="main">
        <div class="products__container" v-for="item in dataReceived">
          <p>{{ item.name }}</p>
          <p>{{ item.username }}</p>
          <p>${{ item.address.geo.lat}}</p>
          <!-- <img :src="japs.thumbnailUrl" /> -->
        </div>
      </main>
    <CategoriesToggle />
    <CategoriesMenu />
  </div>
</template>

<script>

  import axios from 'axios';
  const API = 'https://jsonplaceholder.typicode.com/users';

  import Navigation from "./Navigation";
  import CategoriesToggle from "./CategoriesToggle";
  import CategoriesMenu from "./CategoriesMenu";
  import Search from "./Search";

  export default {
    name: 'LivingRoom',
    data() {
      return {
        dataReceived: []
      }
    },
    components: {
      Navigation,
      CategoriesToggle,
      CategoriesMenu,
      Search
    },
    created() {
        axios.get(API)
          .then((response) => {
            this.dataReceived = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
</script>

<style scoped lang="css">
  .container {
    height: 100%;
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: rgba(240, 240, 240, 1);
  }
  .products__container {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 10rem;
    margin: 2rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, .9);
  }
</style>
