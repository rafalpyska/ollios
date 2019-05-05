<template lang="html">
  <transition name="slide-fade">
    <section class="search">
      <input class="search__input" id="search-input" type="search" name="search__input" v-model="searchValue">
      <label class="search__label" for="search-input">Type product that you are looking for</label>
    </section>
  </transition>
</template>

<script>

  // import {EventBus} from "@/event-bus.js";

  export default {
    name: "Search",
    data() {
      return {
        // filtered: null,
        // filteredArray: null,
        // searchValue: ''
      }
    },
    //
    // computed: {
    //   filteredData() {
    //     if (this.items) {
    //       return this.items.filter((item) => {
    //         this.filtered = item.title.toLowerCase().match(this.searchValue.toLowerCase());
    //         EventBus.$emit('filteredData', this.filtered);
    //
    //       })
    //     }
    //     this.filteredArray.push(this.filtered);
    //   }
    // }
  };

</script>

<style scoped lang="scss">

  .search {
    display: flex;
    flex-direction: column;

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
  }

</style>
