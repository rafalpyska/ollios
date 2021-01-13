<template lang="html">
  <section class="cart">
    <button @click="close()" class="close close-cart">X</button>
      <transition-group tag="div" class="cart__wrapper" name="list">
        <h1 key="2121" class="section__title">Shopping Cart</h1>
        <p key="2222" class="cart__empty" v-if="cart.length === 0">Your basket is empty!</p>
        <div class="cart__item" v-for="item in cart" :key="item.product.id">
          <div class="cart__image-container">
            <img class="cart__image" :src="`http://localhost:1337${item.product.image.url}`" alt="">
          </div>
          <div class="cart__product cart__product-info">
            <div class="cart__product cart__product-title">
              <p class="item__title">Product: {{ item.product.title }}</p>
            </div>
            <div class="cart__product cart__product-quantity">
              <p for="cart-quantity">Quantity:
                <span>{{ item.quantity }}</span>
              </p>
            </div>
          </div>
          <div class="cart__product cart__product-price">
            <p class="item__price">
              Price for a single item: ${{ item.product.price }}
            </p>
          </div>
          <div class="cart__product cart__product-price">
            <AppButton @click.native="removeItemFromCart(item.product)">Remove</AppButton>
          </div>
        </div>
        <div :key="3215" v-if="cart.length > 0" class="cart__summary">
          <p class="item__price">Total: ${{ cartTotalItemPrice }}</p>
        </div>
      </transition-group>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppButton from '@/components/AppButton';

export default {
  name: 'ShoppingCart',
  components: {
    AppButton
  },
  computed: {
    ...mapGetters(['cart', 'cartTotalItemPrice'])
  },
  methods: {
    removeItemFromCart(item) {
      this.$store.dispatch('removeItemFromCart', item);
    },
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-left: 14.5rem;
  background-color: var(--white);
  font-weight: 300;
  @media only screen and (max-width: 64em) {
    padding-left: 0;
  }
  @media only screen and (max-width: 48em) {
    flex-wrap: wrap;
  }
  &__wrapper {
    width: 70%;
  }
  &__empty {
    font-size: 1.8rem;
  }
  &__item {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    padding: 4rem;
    font-size: 2rem;
    &:nth-child(even) {
      background-color: rgba(231, 231, 231, 0.3);
    }
  }
  &__image {
    max-width: 50%;
    height: auto;
    &-container {
      height: 100%;
      @media only screen and (max-width: 48em) {
        display: none;
      }
    }
  }

  &__product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: baseline;
    }
  }
}

.item {
  &__title {
    font-weight: 700;
  }

  &__price {
    font-size: 2rem;
  }
}

.input__quantity--cart {
  margin-left: 2rem;
  border: 1px solid var(--blue);
}
.section__title {
  margin-right: 0;
}
</style>
