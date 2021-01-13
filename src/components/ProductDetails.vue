<template lang="html">
  <section class="product-details">
    <AppLoadingSpinner v-if="singleProductLoadingStatus" />
    <template v-for="(product, index) in singleProduct" v-else>
      <div class="product-details__image-container" :key="index">
        <button @click="close()" class="close">X</button>
        <img
          :src="`http://localhost:1337${product.image.url}`"
          alt=""
          class="product-details__image"
        />
      </div>
      <div class="product-details__container" :key="product.id">
        <div class="product-details__description">
          <div class="section__details">
            <h1 class="heading section__title">Products</h1>
            <p class="section__category">Product id {{ product.id }}</p>
          </div>
          <div class="product__description-container">
            <h2 class="heading product__name">{{ product.title }}</h2>
            <p class="product__description">{{ product.description }}</p>
            <div class="product__order">
              <div class="product__info product__price">
                <p class="product__price-title">Cost</p>
                <span class="price">${{ product.price }}</span>
                <!-- <span class="price-previous">${{ previousPrice }}</span> -->
              </div>
              <div class="product__info product__quantity">
                <label for="quantity" class="product__price-title"
                  >Quantity</label
                >
                <input
                  class="input__quantity"
                  id="quantity"
                  max="10"
                  min="1"
                  name="quantity"
                  type="number"
                  v-model.number="quantity"
                />
              </div>
              <AppButton
                @click.native="addToCart()"
                :disabled="quantity > 10"
                class="btn__add-to-cart"
                >Add to cart
              </AppButton>
            </div>
            <transition name="fade">
              <p class="info" v-if="added">'{{ product.title }}' was added to cart!</p>
            </transition>
            <transition name="fade">
              <p class="info" v-if="quantity > 10">You cannot buy more than 10 items! </p>
            </transition>
          </div>
        </div>
        <ProductRecommended
          :recommendedProducts="recommendedProducts"
        />
      </div>
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLoadingSpinner from './AppLoadingSpinner'
import AppButton from './AppButton';
import ProductRecommended from "./ProductRecommended";

export default {
  name: 'ProductDetails',
  components: {
    AppButton,
    AppLoadingSpinner,
    ProductRecommended
  },
  props: {
    productSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      quantity: 1,
      added: false
    };
  },
  computed: {
    ...mapGetters([
      'singleProductLoadingStatus',
      'singleProductError',
      'singleProduct',
      'recommendedProductsLoadingStatus',
      'recommendedProductsError',
      'recommendedProducts'
    ])
  },
  async created() {
    await this.$store.dispatch('fetchSingleProduct', this.productSlug);
    await this.$store.dispatch('fetchRecommendedProducts');
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
    addToCart() {
      this.added = true;
      this.$store.dispatch('addItemToCart', {
        product: this.singleProduct[0],
        quantity: this.quantity
      });
      setTimeout(() => {
        this.added = false;
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss">
.heading {
  line-height: 55px;
}

.info {
  color: var(--blue);
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: uppercase;
}

.section {
  &__title {
    font-size: 4.8rem;
    @media only screen and (max-width: 90em) {
      font-size: 4rem;
    }
  }
}

.product {
  &__description {
    font-size: 2.4rem;
    font-weight: 300;
    margin: 8.5rem 0;
    @media only screen and (max-width: 48em) {
      font-size: 2rem;
    }
    &-container {
      margin-top: 13rem;
      margin-bottom: 11rem;
      @media only screen and (max-width: 160em) {
        margin-top: 9rem;
        margin-bottom: 4rem;
      }
      @media only screen and (max-width: 48em) {
        margin: 4rem 0;
      }
    }
  }
  &__order {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
    font-size: 1.8rem;
    line-height: 1;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-details {
    display: flex;
    width: 100%;
    height: 100vh;
    padding-left: 14.5rem;
    @media only screen and (max-width: 64em) {
      flex-direction: column;
      padding-left: 0;
    }
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1 1 60%;
      background-color: rgba(240, 240, 240, 1);
      @media only screen and (max-width: 64em) {
        display: inline-block;
        width: 100%;
      }
    }
    &__description {
      height: auto;
      padding: 8rem 37rem 0 12.5rem;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 100;
      flex: 1 1 60%;
      @media only screen and (max-width: 90em) {
        padding: 5rem 8rem 0 12.5rem;
      }
      @media only screen and (max-width: 64em) {
        margin-bottom: 2rem;
        padding: 8rem 10rem;
      }
      @media only screen and (max-width: 48em) {
        margin-bottom: 2rem;
        padding: 6rem;
      }
    }
    &__image {
      transform: scale(1);
      transition: 0.3s all;
      max-width: 100%;
      height: auto;
      &-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 1 40%;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 4px 0 5px -2px var(--shadow);
        z-index: 2;
        overflow: hidden;
        @media only screen and (max-width: 64em) {
          min-height: 55rem;
          width: 100%;
        }
      }
    }

    &__price {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__name {
    font-size: 7.2rem;
    font-weight: 300;
    color: var(--blue);
    text-transform: uppercase;
    @media only screen and (max-width: 90em) {
      font-size: 6rem;
      margin-top: 0;
    }
    @media only screen and (max-width: 34.125em) {
      font-size: 5.2rem;
    }
    @media only screen and (max-width: 25em) {
      font-size: 4rem;
    }
  }

  &__quantity {
    margin-left: 15rem;
    margin-right: 5rem;
    @media only screen and (max-width: 48em) {
      margin-left: 7rem;
    }
    @media only screen and (max-width: 34.125em) {
      margin-left: 2rem;
    }
  }

  &__price-title,
  &__quantity-title {
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    font-weight: 400;
    color: var(--black);
  }
}

.btn__add-to-cart {
  padding: 1rem 5rem;
  align-self: flex-end;
  @media only screen and (max-width: 34.125em) {
    margin-top: 4rem;
  }
}

.price {
  font-size: 4.8rem;
  font-weight: 400;
  color: var(--blue);
  margin-right: 0.75rem;
  @media only screen and (max-width: 48em) {
    font-size: 4rem;
  }
  &-previous {
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--black);
    text-decoration: line-through;
    @media only screen and (max-width: 48em) {
      font-size: 2.2rem;
    }
  }
}
</style>
