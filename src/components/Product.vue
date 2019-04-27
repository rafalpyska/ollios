<template lang="html">
  <figure>
    <img :src="getImgUrl(image)" :alt="name" class="products__image"/>
    <div>
      <figcaption class="products__name">{{ name }}</figcaption>
      <p class="products__description">{{ description }}</p>
      <p class="products__price">${{ price }}</p>
    </div>
  </figure>
</template>

<script>
  import getImageUrl from '../mixins/getImageUrl';

  export default {
    name: "Product",
    props: {
      item: {
        required: true
      }
    },
    data() {
      return {
        name: this.item.title,
        description: this.item.description,
        price: this.item.price,
        image: this.item.image
      }
    },
    mixins: [getImageUrl]
  };
</script>

<style lang="scss">

  .products {
    &__item {
      margin: 0;
      padding: 2rem;
      background-color: rgba(255, 255, 255, 1);
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
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
