<template lang="html">
  <main class="main">
    <div class="content">
      <slot name="title"></slot>
      <slot name="text"></slot>
      <button class="btn__view-more">View more</button>
    </div>
  </main>
</template>

<script>

  export default {
    name: "Home",
    data() {
      return {
      }
    },
    methods: {
    }
  };
</script>

<style scoped lang="css">

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
