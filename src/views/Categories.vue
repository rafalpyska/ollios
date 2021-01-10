<template lang="html">
  <section class="categories">
    <router-view :key="$route.fullPath"></router-view>
  </section>
</template>

<script>
  export default {
    name: 'Categories'
  };
</script>

<style lang="scss">

</style>
