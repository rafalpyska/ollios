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
    align-self: flex-end;
    margin-top: .75rem;
    padding: 1.5rem 5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(0, 35, 255, 0.9);
    border: none;
    border-radius: 2.5rem;
    transform: scale(1);
    cursor: pointer;
    transition: .3s all;
    @media only screen and (max-width: 48em) {
      width: 10rem;
    }
    &:hover {
      transform: scale(1.03);
    }
    &:disabled {
      background-color: rgba(0, 35, 255, .4);
    }
  }
</style>


