<template lang="html">
  <transition name="slide-fade">
<!--    How to avoid so many router-views displaying in vue dev tools? It causes performance issues.-->
  <section v-if="this.$route.params.product === routeItem" class="product-details">
    <div class="product-details__image-container">
      <button @click="close()" class="close">X</button>
      <img :src="getImgUrl(image)" alt="" class="product-details__image">
      <button @click="zoomIn" class="btn__zoom btn__zoom--in">+</button>
      <button  @click="zoomOut" class="btn__zoom btn__zoom--out">-</button>
    </div>
    <div class="product-details__container">
      <div class="product-details__description">
        <section class="section__details">
          <h1 class="heading section__title">Products</h1>
          <p class="section__category">Product id {{ id }}</p>
        </section>
        <section class="product__description-container">
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
              <label for="quantity" class="product__price-title">Quantity</label>
              <input class="input__quantity" id="quantity" max="10" min="1" name="quantity" type="number"
                     v-model.number="quantityProduct">
            </div>
            <AppButton @click.native="addToCart(item)" :disabled="quantityProduct > 10" class="btn">Add to cart</AppButton>
          </div>
          <transition name="fade">
            <p class="info" v-if="added">'{{ name }}' was added to cart!</p>
          </transition>
          <transition name="fade">
            <p class="info" v-if="quantityProduct > 10">You cannot buy more than 10 items! </p>
          </transition>
        </section>

      </div>
      <section class="recommended__wrapper">
        <ProductRecommended
          :products="products"
        />
      </section>
    </div>
  </section>
  </transition>
</template>

<script>
  import Vue from 'vue'
  import AppButton from './AppButton'
  import {EventBus} from "@/event-bus.js"
  import getImageUrl from '../mixins/getImageUrl'
  import ellipsify from '../mixins/ellipsify'
  import ProductRecommended from "./ProductRecommended";

  export default {
    name: "ProductDetails",
    components: {
      AppButton,
      ProductRecommended
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
    mixins: [getImageUrl, ellipsify],
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
        quantity: this.item.quantity,
        quantityProduct: 1,
        routeItem: this.item.route,
        parentRoute: this.$route.matched[0].path
      }
    },
    methods: {
      close() {
        this.$router.push(this.parentRoute);
      },
      addToCart(productToAdd) {
        let found = false;
        if(this.quantityProduct > 10) {
          this.quantityProduct = 10;
        }
        this.cart.forEach((item) => {
          if (item.id === productToAdd.id) {
            found = true;
            item.quantity += this.quantityProduct;
          }
        });
        if (!found) {
          productToAdd.quantity = this.quantityProduct;
          this.cart.push(Vue.util.extend({}, productToAdd));
          EventBus.$emit('update-cart', this.cart);
        }
        this.added = true;
        setTimeout(() => {
          this.added = false;
        }, 2500);

      },
      zoomIn() {
        document.querySelector('.product-details__image').classList.add('zoom-in');
      },
      zoomOut() {
        document.querySelector('.product-details__image').classList.remove('zoom-in');
      }
    }
  };

</script>

<style scoped lang="scss">
  .btn {
    &__zoom {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
      background-color: transparent;
      color: rgba(0, 35, 255, 0.9);
      border: 2px solid rgba(0, 35, 255, 0.9);
      border-radius: 50%;

      &--in {
        bottom: 4.25rem;
        left: 8rem;
        @media only screen and (max-width: 48em) {
          display: none;
        }
      }

      &--out {
        bottom: 4.25rem;
        left: 13rem;
        @media only screen and (max-width: 48em) {
          display: none;
        }
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
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  .section {
    &__title {
      margin: 0;
      font-size: 4.8rem;
      color: rgba(0, 0, 0, 1);
    }
  }

  .product {
    &__description {
      font-size: 2.4rem;
      font-weight: 300;
      margin-bottom: 8.5rem;
      &-container {
        margin-top: 29rem;
        margin-bottom: 24rem;
      }
    }

    &__info {
    }

    &__order {
      margin: 2rem 0;
      font-size: 1.8rem;
    }

    &-details {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      min-height: 100vh;
      z-index: 10;
      padding-left: 14.5rem;
      @media only screen and (max-width: 62em) {
        flex-direction: column;
        padding-left: 0;
      }

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
          @media only screen and (max-width: 62em) {
            width: 100%;
          }
        }
        transform: scale(1);
        transition: .3s all;
        max-width: 100%;
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
        @media only screen and (max-width: 62em) {
          width: 100%;
        }
      }
      &__description {
        height: 100%;
        padding: 8rem 37rem 0 12.5rem;
        color: rgba(168, 168, 168, 1);
        font-weight: 100;
        @media only screen and (max-width: 90.625em) {
          margin-bottom: 6rem;
          padding: 2rem 4rem 2rem 2rem;
        }
        @media only screen and (max-width: 62em) {
          margin-bottom: 2rem;
          padding: 2rem 2rem 0 2rem;
        }
      }
    }

    &__name {
      font-size: 7.2rem;
      font-weight: 300;
      color: rgba(0, 35, 255, 0.9);
      text-transform: uppercase;
      @media only screen and (max-width: 48em) {
        margin-top: 0;
      }
    }

    &__order {
      display: flex;
    }

    &__quantity {
      display: flex;
      flex-direction: column;
      margin-left: 15rem;
      margin-right: 5rem;
    }
    &__price-title,
    &__quantity-title {
      text-transform: uppercase;
      margin: 0 0 2.5rem 0;
      font-weight: 400;
      color: rgba(0, 0, 0, .9)
    }
  }

  .price {
    font-size: 4.8rem;
    font-weight: 400;
    color: rgba(0, 35, 255, 0.9);
    margin-right: .75rem;
    &__container {
      display: flex;
      align-items: center;
    }
    &-previous {
      font-size: 2.4rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      text-decoration: line-through;
    }
  }

  .input__quantity {
    padding: 1rem 1rem;
    border: 1px solid transparent;
    border-radius: 2.5rem;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
  }

  .recommended {
    &__wrapper {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

</style>
