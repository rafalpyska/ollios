<template lang="html">
  <transition name="slide-fade">
    <section class="search">
      <button @click="close()" class="close close-search">X</button>
      <transition-group
        tag="div"
        class="search__content"
        name="list"
        @before-leave="beforeLeave"
      >
        <div class="search__form" :key="122222">
          <form @submit.prevent class="search__controls">
            <input
              class="search__input"
              id="search-input"
              type="search"
              name="search__input"
              v-model="searchValue"
            />
            <label class="search__label" for="search-input"
              >Type product that you are looking for</label
            >
          </form>
        </div>
        <div
          class="products"
          v-if="filteredProducts.length < products.length"
          :key="filteredProducts.length"
        >
          <CategoryProductItem
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            class="products__item"
            :class="'products__item--' + product.id"
          />
        </div>
      </transition-group>
    </section>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import CategoryProductItem from '@/components/CategoryProductItem';
import transitionFix from '@/mixins/transitionFix';

export default {
  name: 'Search',
  components: {
    CategoryProductItem
  },
  mixins: [transitionFix],
  data() {
    return {
      searchValue: ''
    };
  },
  computed: {
    ...mapGetters(['productsLoadingStatus', 'productsError', 'products']),
    filteredProducts() {
      return this.products.filter(product => {
        return product.title
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    }
  },
  async created() {
    await this.$store.dispatch('fetchProducts');
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 8rem 2rem 14.5rem;
  background-color: rgba(240, 240, 240, 0.5);
  font-weight: 300;
  @media only screen and (max-width: 62em) {
    padding: 8rem 22rem 0 12.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 3rem;
  }
  &__content {
    width: 100%;
  }
  &__controls {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  &__controls {
    width: 100%;
    align-items: center;
    @media only screen and (max-width: 62em) {
      margin-top: 10rem;
    }
  }
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  grid-gap: 2rem;
  width: 100%;
  padding: 2rem 10rem;
  @media only screen and (max-width: 62em) {
    padding: 2rem 5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 2rem 3rem;
  }
}
</style>
