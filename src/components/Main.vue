<template lang="html">
  <main class="main">
    <div class="content">
      <h1 class="title">Olios</h1>
      <h2 class="text">Newest furniture shop template</h2>
      <button class="btn btn__view-more">View more</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped lang="css">

  .main {
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    background-image: url('../assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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
