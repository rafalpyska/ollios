<template lang="html">
  <button @click="categoriesToggle" class="btn__categories-toggle"></button>
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

</style>
