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
    min-width: 10rem;
    align-self: flex-end;
    margin-top: .75rem;
    padding: 1.5rem 5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    background-color: var(--blue);
    border: none;
    border-radius: 2.5rem;
    transform: scale(1);
    cursor: pointer;
    transition: .3s all;

    &:hover {
      transform: scale(1.03);
    }

    &:disabled {
      background-color: var(--blue-disabled)
    }
  }
</style>


