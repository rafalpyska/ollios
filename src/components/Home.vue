<template lang="html">
  <main class="main">
    <div class="content">
      <slot name="title"></slot>
      <slot name="text"></slot>
      <button class="btn__view-more">View more</button>
      <button @click="categoriesToggle" class="btn__categories-toggle"></button>
    </div>
  </main>
</template>

<script>

  import { EventBus } from "@/event-bus.js";

  export default {
    name: "Home",
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
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 1px #888;
    cursor: pointer;
    z-index: 3;
  }

  .btn__view-more {
    border: none;
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 35, 255, .9);
    padding: 1rem 3rem;
    border-radius: 2rem;
    margin-top: .75rem;
    font-weight: 700;
    cursor: pointer;
  }
</style>
