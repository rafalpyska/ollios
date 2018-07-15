<template lang="html">
  <div class="container">
    <main class="main">

      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>

      <LoadingSpinner v-if="status"/>

      <section class="products">
        <router-link to="/product-details"tag="figure" class="products__item" v-for="item in dataReceived" :key="item.id" :class="'products__item--' + item.id">
          <img :src="images" alt="" class="products__image"/>
          <div>
            <figcaption class="products__name">{{ item.name }}</figcaption>
            <p class="products__description">{{ item.company.catchPhrase }}</p>
            <p class="products__price">${{ item.address.geo.lat}}</p>
          </div>
        </router-link>
      </section>
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
        images: 'http://via.placeholder.com/350x150',
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

<style lang="scss">

  .main {
    width: 100%;
    padding: 2rem 8rem 2rem 16rem;
    background-color: rgba(240, 240, 240, 1);
  }
  .products {
    display: grid;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: 23% 1fr 23% 23%;
    grid-gap: 2rem;
    &__item {
      margin: 0;
      padding: 2rem;
      background-color: rgba(255, 255, 255, .5);
      cursor: pointer;
      transition: .3s all;
      &:hover {
        background-color: rgba(255, 255, 255, .9);
      }
      &:hover .products__image {
        transform: scale(1.1);
      }
    }
    &__image {
      max-width: 100%;
      transition: .3s all;
    }
    &__item {
      align-items: center;
      &--2 {
        display: flex;
        justify-content: space-around;
        grid-column: 2/5;
        & .products__image {
          order: 2;
        }
      }
      &--4 {
        display: flex;
        justify-content: space-around;
        grid-column: 2/4;
        & .products__image {
          order: 2;
        }
      }
      &--6 {
        display: flex;
        justify-content: space-around;
        grid-column: 1/3;
        & .products__image {
          order: 2;
        }
      }
    }
    &__name {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 300;
    }
    &__description {
      font-size: 1.15rem;
      color: rgba(168, 168, 168, 1);
      font-weight: 100;
    }
    &__price {
      font-size: 1.15rem;
      color: rgba(0, 35, 255, .9);
      font-weight: 300;
    }
    &__name {
      margin: .6rem 0;
    }
  }
  .section {
    &__details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;
      text-transform: uppercase;
    }
    &__title {
      font-size: 2.5rem;
      font-weight: 300;
    }
    &__category {
      font-weight: 100;
    }
  }


</style>
