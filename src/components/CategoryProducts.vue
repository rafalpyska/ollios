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
        <router-link
          :to="{
            name: 'ProductDetails',
            params: { productSlug: product.slug }
          }"
          tag="article"
          :data-product="product.title"
          v-for="product in products.products"
          :key="product.id"
          class="products__item"
        >
          <figure class="products__image-container">
            <img
              :src="`http://localhost:1337${product.image.url}`"
              class="products__image"
            />
          </figure>
          <div class="products__info">
            <p class="products__name">{{ product.title }}</p>
            <p class="products__description">{{ product.description }}</p>
            <p class="products__price">${{ product.price }}</p>
            <!-- <router-link :to="{ name: "ProductDetails", params: { productSlug: product.slug } }">
                CLICK
              </router-link> -->
          </div>
        </router-link>
      </transition-group>
      <router-view />
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from './AppLoadingSpinner'
export default {
  name: 'CategoryProduct',
  components: {
    AppLoadingSpinner
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

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 4rem;
    background-color: var(--white);
    cursor: pointer;
    @media only screen and (max-width: 34.125em) {
      grid-column: 1 / -1;
    }
    @media only screen and (max-width: 48em) {
      padding: 2rem 5rem 0 5rem;
    }
    &:last-child {
      @media only screen and (max-width: 64em) {
        margin-bottom: 8rem;
      }
    }
  }

  &__image {
    max-width: 100%;
    height: auto;
    transition: 0.3s all;
    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36rem;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__name {
    margin: 0.6rem 0;
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    @media only screen and (max-width: 90em) {
      font-size: 2rem;
    }
  }

  &__description {
    flex: 1;
    font-size: 1.8rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 1.75rem;
  }

  &__price {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--blue);
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
