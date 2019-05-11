<template lang="html">
  <section class="recommended">
    <h2 class="recommended__title">Recommended</h2>
    <router-link
      v-for="item in recommendedItems"
      :to="{ path:  item.category + '/' + item.route }"
      tag="div"
      :key="item.id"
      class="recommended__item">

      <div class="recommended__item-image-container">
        <img :src="getImgUrl(item.image)" alt="" class="products__image">
      </div>
      <div class="recommended__item-info">
        <p class="recommended__item-title">{{ item.title }}</p>
        <p class="recommended__item-description">{{ ellipsify(item.description, 50) }}</p>
      </div>
    </router-link>

    <router-view
      v-for="item in products"
      :item="item"
      :key="item.id"
      :products="products"
    />

  </section>
</template>

<script>
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'
  import ProductDetails from "./ProductDetails";

  export default {
    name: "RecommendedProducts",
    components: {
      ProductDetails
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
  .recommended {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, .9);
    font-size: .7rem;
    @media only screen and (max-width: 62em) {
      flex-direction: column;
    }
    &__title {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      font-size: 1.35rem;
      font-weight: 300;
      text-transform: uppercase;
      @media only screen and (max-width: 62em) {
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
      @media only screen and (max-width: 62em) {
        width: 100%;
      }
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      &:last-child {
        @media only screen and (max-width: 62em) {
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
