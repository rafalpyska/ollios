<template lang="html">
  <transition name="slide-fade">
    <section v-show="isToggle" class="search">
      <input class="search__input" type="search" name="search__input" v-model="searchValue" @input="handleRequest">
      <label class="search__label"for="search__input">Type product that you are looking for</label>
      <div class="search__result" v-for="result in results">
        <p>{{ result.name }}</p>
        <p>{{ result.company.catchPhrase }}</p>
        <p>{{ result.address.geo.lat }}</p>
        </p>
      </div>
    </section>



  </transition>
</template>

<script>

import { EventBus } from "@/event-bus.js";
import axios from 'axios';
import debounce from 'lodash.debounce';
const API = 'https://jsonplaceholder.typicode.com/users';

export default {
  name: "Search",
  data() {
    return {
      isToggle: false,
      searchValue: '',
      results: []
    }
  },
  created() {
    EventBus.$on('isActive', (active) => {
      this.isToggle = active;
    });
  },
  methods: {
    handleRequest: debounce(function() {
      axios.get(`${API}?q=${this.searchValue}`)
        .then((response) => {
          this.results = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
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
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
    z-index: 2;
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
