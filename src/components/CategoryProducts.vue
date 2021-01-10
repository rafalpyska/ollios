<template lang="html">
  <section class="search__container">
    <main class="category__main">

      <div class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </div>

      <form class="search-local" @submit.prevent>
        <input class="search__input" id="search-input-local" type="search" name="search__input" v-model="searchValue">
        <label class="search__label" for="search-input-local">Type product that you are looking for</label>
      </form>

        <transition-group
          tag="section"
          class="products"
          name="list"
          v-for="products in singleCategory"
        >
          <router-link to="/japs" tag="article" :data-product="product.title"  v-for="product in products.products" :key="product.id">
            <img :src="product.image.url" class="products__image"/>
            <div class="products__info">
              <slot name="title">
                <p class="products__name">{{ product.title }}</p>
              </slot>
              <slot name="description">
                <p class="products__description">{{ product.description }}</p>
              </slot>
              <slot name="price">
              </slot>
            </div>
          </router-link>
        </transition-group>

      <router-view/>
    </main>

  </section>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "CategoryProduct",
    props: {
      categorySlug: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters(['singleCategoryLoadingStatus', 'singleCategoryError', 'singleCategory'])
    },
    async created() {
      await this.$store.dispatch('fetchSingleCategory', this.categorySlug);
    }
  };
</script>

<style lang="scss">

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 4rem;
    height: 100%;
    pointer-events: none;
    @media only screen and (max-width: 25em) {
      grid-auto-rows: .5fr;
    }

    &__item {
      align-items: center;
      margin: 0;
      padding: 2rem;
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
      transition: .3s all;
    }

    &__name {
      margin: .6rem 0;
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      @media only screen and (max-width: 90em) {
        font-size: 2rem;
      }
    }

    &__description {
      font-size: 1.8rem;
      color: rgba(0, 0, 0, .8);
      font-weight: 300;
    }

    &__price {
      font-size: 1.8rem;
      color: var(--blue);
      font-weight: 700;
    }

    & > * {
      pointer-events: auto;
      transition: .3s opacity, .3s transform;
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

  .recommended__products .products__image {
    max-width: 40%;
  }

  .recommended__products {
    text-align: center;
  }
</style>
