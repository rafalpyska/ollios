<template lang="html">
  <div class="container">
    <main class="main">
      <div class="section__details">
        <h1 class="section__title">All Categories</h1>
        <p class="section__category">{{ $route.name }}</p>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    name: "Categories"
  };
</script>

<style scoped lang="scss">

  .main {
    width: 100%;
    padding: 3rem 8rem 3rem 16rem;
    background-color: #f0f0f0;
  }
</style>
