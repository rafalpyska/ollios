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
        type: Object,
        required: true
      }
    },
    data() {
      return {
        recommended: [],
        recommendedItems: []
      }
    },
    created() {
      for (let key in this.products) {
        if (!this.products.hasOwnProperty(key)) continue;
        let obj = this.products[key];
        this.recommended.push(obj);
        }
      let randomProducts = this.getRandomArrItems(this.recommended, 3);

      for (let key in randomProducts) {
        if (!this.products.hasOwnProperty(key)) continue;
        let obj = randomProducts[key];
        this.recommendedItems.push(obj);
      }
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

<style lang="scss" scoped></style>
