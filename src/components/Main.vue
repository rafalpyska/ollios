<template lang="html">
  <div class="content">
    <h1 class="title">Olios</h1>
    <h2 class="text">Newest furniture shop template</h2>
    <button class="btn__view-more">View more</button>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="css">

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

  .title,
  .text {
    font-weight: 100;
    margin: 0;
    padding: .75rem;
  }

  .title {
    margin-top: 5rem;
    font-size: 8rem;
  }
  .categories__link {
    display: flex;
  }

</style>
