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
    methods: {
      categoriesToggle() {
        this.isActive = !this.isActive;
        EventBus.$emit('toggleActive', this.isActive);
      }
    },
    watch: {
      '$route' () {
        this.isActive = false;
        EventBus.$emit('routeChange', this.isActive);
      }
    }
  };
</script>

<style scoped lang="css">

  .btn__categories-toggle {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: rgba(255, 255, 255, .6);
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 1px #888;
    cursor: pointer;
    z-index: 3;
    transition: all .3s;
  }

  .btn__categories-toggle:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  .btn__categories-toggle.active {
    background-color: rgba(240, 240, 240, .6);
  }
  .btn__categories-toggle.active:hover {
    background-color: rgba(240, 240, 240, 1);
  }



  .btn__categories-toggle:before {
    content: '\2630';
    font-size: 1.5rem;
    font-weight: 700;
    vertical-align: middle;
    color: rgba(0, 35, 255, .9);

  }
  .btn__categories-toggle.active:before {
    content: '\01D5D1';
  }

</style>
