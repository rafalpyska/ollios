<template lang="html">
  <div class="recommended">
    <!-- <h2 class="recommended__section-title">Recommended</h2> -->

      <hooper :settings="hooperSettings" v-for="products in recommendedProducts" :key="products.id">
        <slide v-for="product in products.products" :key="product.id">
          <CategoryProductItem
            :product="product"
          >
            <template v-slot:price="category">
              <p class="product__price">${{ category.product.price }}</p>
            </template>
            <template v-slot:title="category">
              <p class="product__name">{{ category.product.title }}</p>
            </template>
          </CategoryProductItem>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>

  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import '@/assets/styles/hooper.css';
import CategoryProductItem from './CategoryProductItem';
import ellipsify from '@/mixins/ellipsify';
export default {
  name: 'RecommendedProducts',
  components: {
    CategoryProductItem,
    Hooper,
    Slide,
    HooperNavigation
  },
  props: {
    recommendedProducts: {
      type: Array,
      required: true
    }
  },
  mixins: [ellipsify],
  data() {
    return {
      hooperSettings: {
        wheelControl: false,
        mouseDrag: false,
        breakpoints: {
          200: {
            itemsToShow: 1
          },
          600: {
            itemsToShow: 2
          },
          768: {
            itemsToShow: 3
          },
          2560: {
            itemsToShow: 4,
            pagination: "fraction"
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recommended {
  display: flex;
  align-items: center;
  flex: 2;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 0.7rem;
  @media only screen and (max-width: 64em) {
    flex-direction: column;
    padding: 2rem;
  }
  &__wrapper {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }
  &__section-title {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    font-size: 2.756rem;
    font-weight: 300;
    text-transform: uppercase;
    padding: 0 8rem;
    @media only screen and (max-width: 90em) {
      padding: 0 4rem;
    }
    @media only screen and (max-width: 64em) {
      writing-mode: unset;
      transform: rotate(360deg);
    }
  }
  &__product {
    cursor: pointer;
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      & > * {
        pointer-events: auto;
        transition: 0.3s opacity, 0.3s transform;
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
    &-name {
      font-size: 2rem;
    }
  }
  & ::v-deep .product { 
    padding: 0;
  }
  & ::v-deep .product__info {
    flex: auto;
    text-align: center;
  }
  & ::v-deep .product__image {
    max-width: 20rem;
    max-height: 15rem;
  }
  & ::v-deep .product__name {
    font-size: 2rem;
  }
}
</style>
