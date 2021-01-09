<template lang="html">
  <section class="recommended">
    <h2 class="recommended__title">Recommended</h2>
    <transition-group
      tag="section"
      class="products"
      name="list"
    >
      <Product
        v-for="item in recommendedItems"
        :item="item"
        :class="`products__item products__item--${item.id} recommended__products`"
        :key="item.id"
      >
      </Product>

      <router-view
        v-for="item in products"
        :item="item"
        :key="item.id"
        :products="products"
      />
    </transition-group>
  </section>
</template>

<script>
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'
  import Product from "./Product";

  export default {
    name: "RecommendedProducts",
    components: {
      Product
    },
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    mixins: [getImageUrl, ellipsify],
    data() {
      return {
        recommendedItems: null,
      }
    },
    created() {
      this.recommendedItems = this.getRandomArrItems(this.products, 3);

    },
    methods: {
      getRandomArrItems(arr, n) {
        let result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len)
          throw new RangeError("getRandomArrItems: more elements taken than available");
        while (n--) {
          let x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
      }
    }
  }
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
    background-color: rgba(255, 255, 255, .9);
    font-size: .7rem;
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
        font-size: .85rem;
        font-weight: 300;
        color: rgba(168, 168, 168, 1);
      }
    }
  }

</style>
