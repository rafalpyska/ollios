<template lang="html">
  <button @click="categoriesToggle" class="btn__categories-toggle" :class="{ active:isActive }"></button>
</template>

<script>

  import {EventBus} from "@/event-bus.js";

  export default {
    name: "CategoriesToggle",
    data() {
      return {
        isActive: false,
      }
    },
    watch: {
      '$route'() {
        this.isActive = false;
        EventBus.$emit('routeChange', this.isActive);
      }
    },
    methods: {
      categoriesToggle() {
        this.isActive = !this.isActive;
        EventBus.$emit('toggleActive', this.isActive);
      }
    }
  };
</script>

<style scoped lang="scss">

  .btn__categories-toggle {
    position: fixed;
    top: 8rem;
    right: 5rem;
    width: 8.5rem;
    height: 8.5rem;
    background-color: rgba(255, 255, 255, .6);
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 4px #888;
    cursor: pointer;
    z-index: 11;
    transition: all .3s;
    @media only screen and (max-width: 62em) {
      z-index: 12;
    }
    @media only screen and (max-width: 34.125em) {
      top: 2rem;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 3pt 2pt var(--blue);
    }

    &:hover {
      background-color: var(--white);
    }

    &:before {
      content: '\2630';
      font-size: 2.5rem;
      font-weight: 700;
      vertical-align: middle;
      color: var(--blue);
    }

    &.active {
      background-color: rgba(240, 240, 240, .6);
      box-shadow: 0 0 1px #888;

      &:hover {
        background-color: var(--gray);
      }

      &:before {
        content: '\01D5D1';
      }
    }
  }

</style>
