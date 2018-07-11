<template lang="html">
  <transition name="slide-fade">
    <div v-show="isToggle" class="search__container">
      <input class="search__input" type="search" name="search__input" v-model="searchValue" @input="handleRequest">
      <label class="search__label"for="search__input">Type product that you are looking for</label>
    </div>
  </transition>
</template>

<script>

import { EventBus } from "@/event-bus.js";
import axios from 'axios';
const API = 'https://jsonplaceholder.typicode.com/photos';

export default {
  name: "Search",
  data() {
    return {
      isToggle: false,
      searchValue: '',
    }
  },
  created() {
    EventBus.$on('isActive', (active) => {
      this.isToggle = active;
    });
  },
  methods: {
    handleRequest(e) {
      axios.get(`${API}?title=${this.searchValue}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};

</script>

<style scoped lang="css">

.search__container {
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
}

.search__input {
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

.search__label {
  color: rgba(177, 177, 177, .9);
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
