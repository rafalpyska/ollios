<template lang="html">
  <div class="container">
    <main class="main">
      <LoadingSpinner v-if="status"/>

        <div class="products">
          <h1>Products</h1>
          <p>{{ $route.name }}</p>
        </div>

        <div class="products__container">
          <div class="products__item" v-for="item in dataReceived" :class="'products__item--' + item.id">
            <!-- <img :src="image.url" :alt="image.alt" class="products__image"/> -->
            <p class="products__name">{{ item.name }}</p>
            <p class="products__description">{{ item.company.catchPhrase }}</p>
            <p class="products__price">${{ item.address.geo.lat}}</p>
          </div>
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
        images: [
          {
            url: require('../assets/images/blueseat.png'),
            alt: ''
          },
          {
            url: require('../assets/images/whitetable.png'),
            alt: ''
          },
          {
            url: require('../assets/images/redseat.png'),
            alt: ''
          },
          {
            url: require('../assets/images/modernbed.png'),
            alt: ''
          },
          {
            url: require('../assets/images/darkseat.png'),
            alt: ''
          }
        ]
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

<style scoped lang="scss">

  .main {
    width: 100%;
    height: 100%;
    padding: 3rem 8rem 3rem 16rem;
    background-color: rgba(240, 240, 240, 1);
  }
  .products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    text-transform: uppercase;
    &__container {
      display: grid;
      grid-template-rows: repeat(2, 50%);
      grid-template-columns: 20% 1fr 20% 20%;
      grid-gap: 2rem;
    }
    &__item {
      padding: 2rem;
      background-color: rgba(255, 255, 255, .9);
    }
    &__image {
      max-width: 100%;
    }
    &__item {
      &--2 {
        grid-column: 2/5;
      }
      &--4 {
        grid-column: 2/4;
      }
    }
    &__name {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 300;
    }
    &__desciption {
      color: rgba(168, 168, 168, 1);
      font-weight: 100;
    }
    &__price {
      color: rgba(0, 35, 255, .9);
      font-weight: 300;
    }
  }
</style>
