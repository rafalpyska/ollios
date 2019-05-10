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
    margin-top: .75rem;
    padding: 1rem 3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .9);
    background-color: rgba(0, 35, 255, .9);
    border: none;
    border-radius: 2rem;
    transform: scale(1);
    cursor: pointer;
    transition: .3s all;
    &:hover {
      transform: scale(1.03);
    }
    &:disabled {
      background-color: rgba(0, 35, 255, .4);
    }
  }
</style>


