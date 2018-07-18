<template lang="html">
  <section class="product-details">
    <div class="product-details__image">
        <button @click="$emit('closeDetails')" class="btn__product-details-toggle">X</button>
      <img :src="images" alt="">
    </div>
    <div class="product-details__container">
    <div class="product-details__description">
      <section class="section__details">
        <h1 class="section__title">Products</h1>
        <p class="section__category">{{ $route.name }}</p>
      </section>
      <section class="product__description">
        <h2 class="product__name">{{ name }}</h2>
        <p class="product__description">{{ description }}</p>
        <div class="product__order">
          <div class="product__price">
            <p>Cost</p>
            <p>${{ price }}</p>
          </div>
          <div class="product__quantity">
            <label for="quantity">Quantity</label>
            <input type="number" name="quantity" min="1" max="10">
          </div>
          <button>Add to card</button>
        </div>

      </section>
    </div>
    <section class="recomended">
      <h2 class="recomended__title">Recomended</h2>
    </section>
    </div>
  </section>
</template>

<script>

  export default {
    name: "ProductDetails",
    props: {
      item: {
        type: Object,
        required: true
      },
      images: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        name: this.item.name,
        description: this.item.company.catchPhrase,
        price: this.item.address.geo.lat
      }
    }
  };

</script>

<style scoped lang="scss">

  .section {
    &__title {
      font-size: 1.5rem;
    }
  }
  .product {
    &-details {
    display: flex;
    width: 100%;
    min-height: 100%;
    &__image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
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
      height: 100%;
      padding: 2rem 0 0 2rem;
    }
    }
    &__name {
      font-size: 3rem;
      color: rgba(0, 35, 255, 0.9);
      text-transform: uppercase;
    }
    &__description {

    }
    &__order {
      display: flex;
    }
    &__quantity {
      display: flex;
      flex-direction: column;
    }
  }
  .recomended {
    display: flex;
    align-items: center;
    width: 100%;
    height: 35%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, .9);
    font-size: .7rem;
    &__title {
      writing-mode: tb-rl;
      transform: rotate(180deg);
      font-weight: 100;
      text-transform: uppercase;
    }
  }
  .btn__product-details-toggle {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 25px;
    height: 25px;
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    transition: .2s all;
    &:hover {
      color: rgba(0, 35, 255, 0.9);
    }
  }
</style>
