<template lang="html">
  <router-link :to="{ path: this.item.category + '/' + routeProduct }" tag="article" :data-product="nameProduct">
    <img :src="getImgUrl(this.item.image)" :alt="nameProduct" class="products__image"/>
    <article class="products__info">
      <slot name="title" :item="item">
        <p class="products__name">{{ this.item.title }}</p>
      </slot>
      <slot name="description" :item="item">
        <p class="products__description">{{ ellipsify(this.item.description, 100) }}</p>
      </slot>
      <slot name="price" :item="item">

      </slot>
    </article>
  </router-link>
</template>

<script>
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'

  export default {
    name: "Product",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    mixins: [getImageUrl, ellipsify],
    data() {
      return {
        nameProduct: this.item.title,
        descriptionProduct: this.item.description,
        priceProduct: this.item.price,
        imageProduct: this.item.image,
        routeProduct: this.item.route
      }
    },
    methods: {
      ellipsify(string) {
        if (string.length > 100) {
          return (string.substring(0, 100) + "...");
        } else {
          return string;
        }
      }
    }
  };
</script>

<style lang="scss">

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 4rem;
    pointer-events: none;

    &__item {
      align-items: center;
      margin: 0;
      padding: 2rem;
      background-color: var(--white);
      cursor: pointer;
      @media only screen and (max-width: 48em) {
        padding: 2rem 5rem 0 5rem;
      }

      &:last-child {
        @media only screen and (max-width: 62em) {
          margin-bottom: 8rem;
        }
      }
    }

    &__image {
      max-width: 100%;
      transition: .3s all;
    }

    &__name {
      margin: .6rem 0;
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
    }

    &__description {
      font-size: 1.8rem;
      color: rgba(168, 168, 168, 1);
      font-weight: 300;
    }

    &__price {
      font-size: 1.8rem;
      color: var(--blue);
      font-weight: 700;
    }

    & > * {
      pointer-events: auto;
      transition: .3s opacity, .3s transform;
    }

    &:hover > *,
    &:focus-within > * {
      opacity: 0.4;
    }

    &:hover > :hover,
    &:focus-within > :focus {
      transform: scale(1.02);
      opacity: 1;
    }

    &:hover > :focus:not(:hover) {
      transform: scale(1.01);
    }
  }

</style>
