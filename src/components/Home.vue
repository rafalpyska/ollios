<template lang="html">

  <div class="content">
    <slot name="title"></slot>
    <slot name="text"></slot>
    <button>View more</button>
  </div>

</template>

<script>
  export default {
    name: "Home"
  };
</script>

<style scoped lang="css">

button {
  border: none;
  color: rgba(255, 255, 255, .9);
  background-color: rgba(0, 35, 255, 1);
  padding: 1.5rem 4rem;
  border-radius: 2rem;
  margin-top: .75rem;
  font-weight: 700;
}
</style>
