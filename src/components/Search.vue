<template lang="html">
  <transition name="slide-fade">
    <section v-show="isToggle" class="search-modal">
      <button @click="close()" class="close close-search">X</button>
      <input class="search__input" type="search" name="search__input" v-model="searchValue">
      <label class="search__label" for="search__input">Type product that you are looking for</label>
      <div class="search__result-container">
<!--        <div class="search__result" v-for="result in filteredData">-->
<!--          <p>{{ result.title }}</p>-->
<!--          <p>{{ result.description }}</p>-->
<!--        </div>-->
      </div>
    </section>
  </transition>
</template>

<script>

import { EventBus } from "@/event-bus.js";
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = '/static/products.json';

export default {
  name: "Search",
  data() {
    return {
      categories: null,
      products: null,
      isToggle: false,
      searchValue: ''
    }
  },
  created() {
    EventBus.$on('requestedData', (categories, products) => {
      this.categories = categories;
      this.products = products;
    });
    EventBus.$on('isActiveSearch', (active) => {
      this.isToggle = active;
    });
  },
  computed: {
    // filteredData() {
    //   return this.products.filter((item) => {
    //     return item.title.toLowerCase().match(this.searchValue.toLowerCase());
    //   })
    // }
  },
  methods: {
    close() {
      this.isToggle = false;
      EventBus.$emit('searchClosed', this.isToggle);
    }
  },
  watch: {
    '$route' () {
      this.isToggle = false;
    }
  }
};

</script>

<style scoped lang="scss">

  .search {
    &__input {
      font-family: 'Lato', sans-serif;
      font-size: 4rem;
      font-weight: 100;
      text-transform: uppercase;
      border: 0;
      border-bottom: 1px solid rgba(177, 177, 177, .9);
      background-color: transparent;
      padding: 1.5rem;
      width: 70%;
      margin-bottom: 1rem;
    }
    &__label {
      color: rgba(177, 177, 177, .9);
    }
    &__result {
      &-container {
        display: flex;
      }
    }
  }

  .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: all .4s ease;
    }

  .slide-fade-enter {
    transform: translateY(-100%);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateY(-100%);
  }

</style>
