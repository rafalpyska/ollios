<template lang="html">
  <div class="container">
    <main class="main">
      <section class="product-details">
        <div class="product-details__image">

        </div>
        <div class="product-details__container">
        <div class="product-details__description">
          <section class="section__details">
            <h1 class="section__title">Products</h1>
            <p class="section__category">{{ $route.name }}</p>
          </section>
        </div>
        <section class="recomended">

        </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

  export default {
    name: "ProductDetails"
  }

</script>

<style scoped lang="scss">

  .main {
    width: 100%;
    padding: 0;
  }

  .section {
    &__title {
      font-size: 1.5rem;
    }
  }
  .product-details {
    display: flex;
    width: 100%;
    height: 100%;
    &__image {
      width: 40%;
      background-color: rgba(255, 255, 255, .9);
      box-shadow: 4px 0 5px -2px rgba(0, 0, 0, .1);
      z-index: 2;
    }
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      background-color: rgba(240, 240, 240, 1);
    }
    &__description {
      padding: 2rem 0 0 2rem;
    }
  }
  .recomended {
    width: 100%;
    height: 25%;
    background-color: rgba(255, 255, 255, .9);
  }
</style>
