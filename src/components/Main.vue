<template lang="html">
  <main class="main">
    <div class="content">
      <h1 class="title">Olios</h1>
      <h2 class="text">Newest furniture shop template</h2>
      <Btn>
        View More
      </Btn>
    </div>
  </main>
</template>

<script>
  import Btn from "./Btn"
export default {
  name: "Main",
  components: {
    Btn
  }
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

  .content {
    margin-top: 8rem;
  }

  .title {
    font-size: 12rem;
    font-weight: 100;
  }

  .text {
    font-weight: 300;
  }

  .title,
  .text {
    margin: 0;
    padding: .75rem;
  }

  .categories__link {
    display: flex;
  }

</style>
