<template lang="html">
  <section class="product-details">
    <div class="product-details__image">
      <button @click="$emit('close')" class="close">X</button>
      <img :src="getImgUrl(image)" alt="">
    </div>
    <div class="product-details__container">
      <div class="product-details__description">
        <section class="section__details">
          <h1 class="heading section__title">Products</h1>
          <p class="section__category">{{ $route.name }}</p>
        </section>
        <section class="product__description">
          <h2 class="heading product__name">{{ name }}</h2>
          <p class="product__description">{{ description }}</p>
          <div class="product__order">
            <div class="product__info product__price">
              <p class="product__price-title">Cost</p>
              <div class="price__container">
                <span class="price">${{ price }}</span>
                <span class="price-previous">${{ previousPrice }}</span>
              </div>
            </div>
            <div class="product__info product__quantity">
              <label for="quantity">Quantity</label>
              <input class="input__quantity" id="quantity" max="10" min="1" name="quantity" type="number"
                     v-model.number="item.quantity">
            </div>
            <Btn @click.native="addToCart(item)" class="btn">Add to cart</Btn>
          </div>
        </section>
        <transition name="fade">
          <p class="info" v-if="added">'{{ name }}' was added to cart!</p>
        </transition>
      </div>
      <RecommendedProducts
      :products="dataToDisplay"
      />
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import Btn from './Btn'
  import {EventBus} from "@/event-bus.js"
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'
  import RecommendedProducts from "./RecommendedProducts";

  export default {
    name: "ProductDetails",
    components: {
      Btn,
      RecommendedProducts
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      dataToDisplay: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        cart: [],
        recommended: [],
        recommendedItems: [],
        added: false,
        name: this.item.title,
        description: this.item.description,
        price: this.item.price,
        image: this.item.image,
        id: this.item.id,
        previousPrice: this.item.price * 2,
        quantity: this.item.quantity
      }
    },
    methods: {
      addToCart(productToAdd) {
        let found = false;
        this.cart.forEach((item) => {
          if (item.id === productToAdd.id) {
            found = true;
            item.quantity += productToAdd.quantity;
          }
        });
        if (!found) {
          this.cart.push(Vue.util.extend({}, productToAdd));
        }
        productToAdd.quantity = 1;
        this.added = true;
        EventBus.$emit('update-cart', this.cart);
        setTimeout(()  => {
          this.added = false;
        }, 2500);
      }
    },
    mixins: [getImageUrl, ellipsify]
  };

</script>

<style lang="scss">
  .heading {
    line-height: 55px;
  }
  .info {
    color: rgba(0, 35, 255, 0.9);
    font-weight: 300;
    text-transform: uppercase;
  }

  .section {
    &__title {
      font-size: 2rem;
      color: rgba(0, 0, 0, 1);
    }
  }

  .product {
    &__description {
      font-weight: 300;
    }

    &__info {
      margin-right: 2.5rem;
    }

    &__order {
      margin-top: 2rem;
    }

    &-details {
      display: flex;
      width: 100%;
      height: 100vh;
      padding-left: 8em;

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
      &__price {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60%;
        background-color: rgba(240, 240, 240, 1);
      }
      &__quantity {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &__description {
        height: 100%;
        padding: 2rem 16rem 0 2rem;
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
    }

    &__quantity {
      display: flex;
      flex-direction: column;
    }
  }

  .product__price-title {
    margin: 0;
  }


  .price {
    &__container {
      display: flex;
      align-items: center;
    }

    font-size: 2rem;
    color: rgba(0, 35, 255, 0.9);
    margin-right: .75rem;

    &-previous {
      color: rgba(0, 0, 0, 1);
      text-decoration: line-through;
    }
  }

  .input__quantity {
    width: 3rem;
    height: 2rem;
    border-radius: 40%;
    text-align: center;
    font-weight: 700;
    border: 1px solid rgba(0, 35, 255, 0.9);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
