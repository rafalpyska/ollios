<template lang="html">
  <transition name="slide-fade" mode="in-out">
  <section class="product-details">
    <div class="product-details__image-container">
      <button @click="close()" class="close">X</button>
      <img :src="getImgUrl(image)" alt="" class="product-details__image">
      <button @click="zoomIn" class="btn__zoom btn__zoom--in">+</button>
      <button @click="zoomOut" class="btn__zoom btn__zoom--out">-</button>
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
      :products="products"
      />
    </div>
  </section>
  </transition>
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
      products: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isToggle: false,
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
    created() {
      EventBus.$on('isActiveDetails', (active) => {
        this.isToggle = active;
      });
    },
    methods: {
      close() {
        this.isToggle = false;
        EventBus.$emit('detailsClosed', this.isToggle);
      },
      addToCart(productToAdd) {
        let found = false;
        this.cart.forEach((item) => {
          if (item.id === productToAdd.id) {
            found = true;
            // item.quantity += productToAdd.quantity;
          }
        });
        if (!found) {
          this.cart.push(Vue.util.extend({}, productToAdd));
        }
        productToAdd.quantity = 1;
        this.added = true;
        setTimeout(()  => {
          this.added = false;
        }, 2500);
        EventBus.$emit('update-cart', this.cart);

      },
      zoomIn() {
        document.querySelector('.product-details__image').classList.add('zoom-in');
      },
      zoomOut() {
        document.querySelector('.product-details__image').classList.remove('zoom-in');
      }
    },
    mixins: [getImageUrl, ellipsify]
  };

</script>

<style lang="scss">
  .btn {
    &__zoom {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 25px;
      height: 25px;
      font-size: 1rem;
      background-color: transparent;
      color: rgba(0, 35, 255, 0.9);
      border: 2px solid rgba(0, 35, 255, 0.9);
      border-radius: 50%;

      &--in {
        bottom: 2rem;
        left: 2rem;
      }

      &--out {
        bottom: 2rem;
        left: 6rem;
      }
    }
  }

  .zoom {
    &-in {
      transform: scale(1.2)!important;
    }
  }

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
      font-size: 1.15rem;
      font-weight: 300;
    }

    &__info {
      margin-right: 2.5rem;
    }

    &__order {
      margin-top: 2rem;
    }

    &-details {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100vh;
      z-index: 10;

      &__image {
        &-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 4px 0 5px -2px rgba(0, 0, 0, .1);
          z-index: 2;
        }
        transform: scale(1);
        transition: .3s all;
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

</style>
