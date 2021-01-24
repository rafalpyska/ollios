<template lang="html">
  <section class="products">
    <BaseLoadingSpinner v-if="singleCategoryLoadingStatus" />
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
        v-for="products in filteredProducts"
        :key="products.id"
        @before-leave="beforeLeave"
      >
        <CategoryProductItem
          v-for="product in products.products"
          :key="product.id"
          :product="product"
        >
          <template v-slot:title="category">
            <p class="product__name">{{ category.product.title }}</p>
          </template>
          <template v-slot:price="category">
            <p class="product__price">${{ category.product.price }}</p>
          </template>
          <template v-slot:description="category">
            <p class="product__description">
              {{ category.product.description }}
            </p>
          </template>
        </CategoryProductItem>
      </transition-group>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import transitionFix from '@/mixins/transitionFix';
import CategoryProductItem from './CategoryProductItem';
export default {
  name: 'CategoryProduct',
  components: {
    CategoryProductItem
  },
  props: {
    categorySlug: {
      type: String,
      required: true
    }
  },
  mixins: [transitionFix],
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
    ]),
    filteredProducts() {
      return this.singleCategory.reduce((output, category) => {
        const filteredProducts = category.products.filter(product => {
          return product.title
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        });
        if (filteredProducts.length) {
          output.push({
            ...category,
            products: filteredProducts
          });
        }
        return output;
      }, []);
    }
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

.recommended__products {
  text-align: center;
}
.search-local {
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
}
</style>
