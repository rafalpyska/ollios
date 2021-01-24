<template lang="html">
  <div class="recommended">
    <h2 class="recommended__section-title">Recommended</h2>
    <div
      class="recommended__product-list"
      v-for="products in recommendedProducts"
      :key="products.id"
    >
      <CategoryProductItem
        v-for="product in products.products"
        :key="product.id"
        :product="product"
      >
        <template v-slot:title="category">
          <p class="product__name">{{ category.product.title }}</p>
        </template>
      </CategoryProductItem>
    </div>
  </div>
</template>

<script>
import CategoryProductItem from './CategoryProductItem';
import ellipsify from '@/mixins/ellipsify';
export default {
  name: 'RecommendedProducts',
  components: {
    CategoryProductItem
  },
  props: {
    recommendedProducts: {
      type: Array,
      required: true
    }
  },
  mixins: [ellipsify]
};
</script>

<style lang="scss" scoped>
.recommended {
  display: flex;
  align-items: center;
  flex: 2;
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
    flex-direction: row;
    padding: 0;
  }
  & ::v-deep .product__info {
    flex: auto;
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
