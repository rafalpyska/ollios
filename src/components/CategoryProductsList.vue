<template lang="html">
  <section class="products">
    <AppLoadingSpinner v-if="singleCategoryLoadingStatus"/>
    <main class="category__main" v-else>
      <div class="section__details">
        <h1 class="section__title">Products</h1>
        <p
          class="section__category"
          v-for="category in singleCategory"
          :key="category.id"
        >
          {{ category.title }}
        </p>
      </div>

      <form class="search-local" @submit.prevent>
        <input
          class="search__input"
          id="search-input-local"
          type="search"
          name="search__input"
          v-model="searchValue"
        />
        <label class="search__label" for="search-input-local"
          >Type product that you are looking for</label
        >
      </form>
      <transition-group
        tag="div"
        class="products__list"
        name="list"
        v-for="products in singleCategory"
        :key="products.id"
      >
        <CategoryProductItem
          v-for="product in products.products"
          :key="product.id"
          :product="product"
        />
      </transition-group>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from './AppLoadingSpinner'
import CategoryProductItem from './CategoryProductItem'
export default {
  name: 'CategoryProduct',
  components: {
    AppLoadingSpinner,
    CategoryProductItem
  },
  props: {
    categorySlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchValue: ''
    };
  },
  computed: {
    ...mapGetters([
      'singleCategoryLoadingStatus',
      'singleCategoryError',
      'singleCategory'
    ])
  },
  async created() {
    await this.$store.dispatch('fetchSingleCategory', this.categorySlug);
  }
};
</script>

<style lang="scss" scoped>
.products {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 4rem;
    height: 100%;
    pointer-events: none;
    @media only screen and (max-width: 25em) {
      grid-auto-rows: 0.5fr;
    }
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
}

.recommended__products .products__image {
  max-width: 40%;
}

.recommended__products {
  text-align: center;
}
.search-local {
  margin-bottom: 5rem;
}
</style>
