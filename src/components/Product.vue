<template lang="html">

    <router-link to="/product-details" tag="figure">
      <img :src="images" alt="" class="products__image"/>
      <div>
        <figcaption class="products__name">{{ name }}</figcaption>
        <p class="products__description">{{ description }}</p>
        <p class="products__price">${{ price }}</p>
      </div>
    </router-link>

</template>

<script>

import { EventBus } from "@/event-bus.js";

export default {
  name: "Product",
  props: {
    item: {
      type: Object,
      required: true,
    },
    images: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: this.item.name,
      description: this.item.company.catchPhrase,
      price: this.item.address.geo.lat
    }
  }
};
</script>

<style lang="scss">

  .products {
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

</style>
