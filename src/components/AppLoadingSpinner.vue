<template lang="html">
  <div class="spinner" :style="spinner__styles"></div>
</template>

<script>

  export default {
    name: "AppLoadingSpinner",
    computed: {
      spinner__styles() {
        return {
          'border-radius': '100%',
          'border': '4px solid rgba(255, 255, 255, .9)',
          'border-top': '4px solid rgba(0, 35, 255, .9)',
          'width': '50px',
          'height': '50px',
          'animation': 'spinner-animation 0.8s linear infinite'
        }
      }
    }
  }

</script>

<style lang="scss">
  .spinner {
    transition: all 0.3s linear;
    margin: 0 auto;
  }

  @keyframes spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
