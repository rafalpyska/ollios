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
        </section>
        <section class="product__description">
          <h2 class="product__name">{{ name }}</h2>
          <p class="product__description">{{ description }}</p>
          <div class="product__order">
            <div class="product__price">
              <p>Cost</p>
              <span class="price">${{ price }}</span>
              <span class="price-previous">${{ previousPrice }}</span>
            </div>
            <div class="product__quantity">
              <label for="quantity">Quantity</label>
              <input class="input__quantity" id="quantity" max="10" min="1" name="quantity" type="number"
                     v-model="quantity">
            </div>
            <button @click="addToCart()" class="btn">Add to cart</button>
          </div>
        </section>
      </div>
      <section class="recommended">
        <h2 class="recommended__title">Recommended</h2>
      </section>
    </div>
  </section>
</template>

<script>
  import {EventBus} from "@/event-bus.js";

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
        price: Math.abs(parseFloat(this.item.address.geo.lat)),
        previousPrice: Math.abs(parseFloat(this.item.address.geo.lng)),
        quantity: 1
      }
    },
    methods: {
      addToCart() {
        EventBus.$emit('update-cart', this.item, this.quantity);
      }
    }
  };

</script>

<style lang="scss" scoped>
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
      padding-left: 10rem;
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
        color: rgba(168, 168, 168, 1);
        font-weight: 100;
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
      align-items: center;

      & > div {
        padding: 2rem 3rem 2rem 0;
      }
    }

    &__quantity {
      display: flex;
      flex-direction: column;
    }
  }

  .price {
    color: rgba(0, 35, 255, 0.9);

    &-previous {
      color: rgba(0, 0, 0, 1);
      text-decoration: line-through;
    }
  }

  .input__quantity {
    width: 3rem;
    height: 2rem;
    border: 0;
    border-radius: 40%;
    text-align: center;
    font-weight: 700;
  }

  .recommended {
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
