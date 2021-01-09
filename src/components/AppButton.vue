<template lang="html">
  <component
    :is="type"
    :to="to"
    class="btn">
    <slot>Button</slot>
  </component>
</template>

<script>
  export default {
    name: "AppButton",
    props: {
      to: {
        required: false
      },
      btnType: {
        type: String
      },
      disabled: {
        type: Boolean
      }
    },
    computed: {
      type() {
        if (this.to) {
          return 'router-link';
        }
        return 'button';
      }
   }
  }
</script>

<style lang="scss">
  .btn {
    font-size: 1.75rem;
    padding: 1.5rem 5rem;
    align-self: flex-end;
    margin-top: .75rem;
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


