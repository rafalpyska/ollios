<template lang="html">
  <div class="container">
    <main class="main">
      <LoadingSpinner v-if="status"/>
      <div class="products__container" v-for="item in dataReceived">
        <p>{{ item.name }}</p>
        <p>{{ item.username }}</p>
        <p>${{ item.address.geo.lat}}</p>
        <img :src="images" />
      </div>
    </main>
  </div>
</template>

<script>

  import LoadingSpinner from "./LoadingSpinner";
  import axios from 'axios';
  const API = 'https://jsonplaceholder.typicode.com/users';

  export default {
    name: 'LivingRoom',
    data() {
      return {
        status: true,
        dataReceived: [],
        images: 'http://via.placeholder.com/350x150'
      }
    },
    components: {
      LoadingSpinner
    },
    created() {
        axios.get(API)
          .then((response) => {
            this.dataReceived = response.data;
            this.status = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
</script>

<style scoped lang="css">

  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-color: rgba(240, 240, 240, 1);
  }
  .products__container {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, .9);
  }
</style>
