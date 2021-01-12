<template lang="html">
  <div class="recommended">
    <div class="recommended__product-list" v-for="products in recommendedProducts" :key="products.id">
      <CategoryProductItem 
          v-for="product in products.products"
          :key="product.id"
          :product="product"
      >
      </CategoryProductItem>
    </div>
  </div>
</template>

<script>
  import CategoryProductItem from './CategoryProductItem'
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
  }
};
</script>

<style lang="scss" scoped>
.recommended {
  padding: 2rem 0;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 0.7rem;
  @media only screen and (max-width: 64em) {
    flex-direction: column;
    padding: 2rem;
  }

  &__section-title {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    font-size: 3.66rem;
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
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      justify-items: center;
      text-align: center;
      grid-auto-rows: 1fr;
    }
  }
}
</style>
