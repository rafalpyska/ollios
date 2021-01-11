<template lang="html">
  <section class="recommended">
    <h2 class="recommended__title">Recommended</h2>
    <div class="recommended__product-list" v-for="recommended in recommendedProducts" :key="recommended.id">
      <div class="recommended__product" v-for="product in recommended.products" :key="product.id" >
        <router-link :to="{ name: 'ProductDetails', params: { productSlug: product.slug } }">
          {{ product.title }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// import CategoryProductItem from './CategoryProductItem'
export default {
  name: 'RecommendedProducts',
  components: {
    // CategoryProductItem
  },
  props: {
    recommendedProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.products__image {
  max-width: 40%;
}
.recommended {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 0.7rem;
  @media only screen and (max-width: 64em) {
    flex-direction: column;
    padding: 2rem;
  }

  &__title {
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

  &__item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 0 1rem;
    cursor: pointer;
    @media only screen and (max-width: 64em) {
      width: 100%;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    &:last-child {
      @media only screen and (max-width: 64em) {
        margin-bottom: 8rem;
      }
    }

    &-image {
      &-container {
        width: 200px;
        height: 200px;
      }
    }

    &-title {
      font-size: 1.15rem;
    }

    &-description {
      font-size: 0.85rem;
      font-weight: 300;
      color: rgba(168, 168, 168, 1);
    }
  }
}
</style>
