<template lang="html">
  <button @click="categoriesToggle" class="btn__categories-toggle" :class="{ active:isActive }"></button>
</template>

<script>

  import { EventBus } from "@/event-bus.js";

  export default {
    name: "CategoriesToggle",
    data() {
      return {
        isActive: false,
      }
    },
    watch: {
      '$route' () {
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
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: rgba(255, 255, 255, .6);
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 4px #888;
    cursor: pointer;
    z-index: 4;
    transition: all .3s;
    @media only screen and (max-width: 62em) {
      z-index: 12;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 3pt 2pt rgba(0, 35, 255, 1);;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
    &:before {
      content: '\2630';
      font-size: 1.5rem;
      font-weight: 700;
      vertical-align: middle;
      color: rgba(0, 35, 255, .9);
    }
    &.active {
      background-color: rgba(240, 240, 240, .6);
      box-shadow: 0 0 1px #888;
      &:hover {
        background-color: rgba(240, 240, 240, 1);
      }
      &:before {
        content: '\01D5D1';
      }
    }
  }

</style>
