<template lang="html">
  <section class="recommended">
    <h2 class="recommended__title">Recommended</h2>
    <div v-for="item in recommendedItems" class="recommended__item">

      <div class="recommended__item-image-container">
        <img :src="getImgUrl(item.image)" alt="" class="products__image">
      </div>
      <div class="recommended__item-info">
        <p class="recommended__item-title">{{ item.title }}</p>
        <p class="recommended__item-description">{{ ellipsify(item.description, 50) }}</p>
      </div>

    </div>

  </section>
</template>

<script>
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'

  export default {
    name: "RecommendedProducts",
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        recommendedItems: null
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
    },
    mixins: [getImageUrl, ellipsify]
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
    &__title {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      font-size: 1.35rem;
      font-weight: 300;
      text-transform: uppercase;
    }
    &__item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 25%;
      padding: 0 1rem;
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
