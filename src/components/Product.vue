<template lang="html">
  <figure :data-product="name">
    <img :src="getImgUrl(image)" :alt="name" class="products__image"/>
    <div class="products__info">
      <figcaption class="products__name">{{ name }}</figcaption>
      <p class="products__description">{{ ellipsify(description, 100) }}</p>
      <p class="products__price">${{ price }}</p>
    </div>
  </figure>
</template>

<script>
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'

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
    methods: {
      ellipsify(string) {
        if(string.length > 100) {
          return (string.substring(0, 100) + "...");
        } else {
          return string;
        }
      }
    },
    mixins: [getImageUrl, ellipsify]
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
      cursor: pointer;
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
      font-weight: 300;
    }
    &__price {
      font-size: 1.15rem;
      color: rgba(0, 35, 255, .9);
      font-weight: 700;
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
