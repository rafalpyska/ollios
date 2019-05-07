<template lang="html">
  <button class="btn">
    <slot>Button</slot>
  </button>
</template>

<script>
  export default {
    name: "AppButton"
  }
</script>

<style lang="scss">
  .btn {
    border: none;
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 35, 255, .9);
    padding: 1rem 3rem;
    border-radius: 2rem;
    margin-top: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transform: scale(1);
    transition: .3s all;
    &:hover {
      transform: scale(1.03);
    }
  }
</style>


