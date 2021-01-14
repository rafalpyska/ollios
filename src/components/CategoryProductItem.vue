<template>
  <router-link
    :to="{
      name: 'ProductDetails',
      params: { productSlug: product.slug }
    }"
    tag="article"
    class="product"
  >
    <figure class="product__image-container">
      <img
        :src="`http://localhost:1337${product.image.url}`"
        class="product__image"
      />
    </figure>
    <div class="product__info">
      <p class="product__name">{{ product.title }}</p>
      <slot name="description" :product="product">
      </slot>
      <slot name="price" :product="product"> 
      </slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CategoryProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 4rem;
    background-color: var(--white);
    cursor: pointer;
    @media only screen and (max-width: 64em) {
      grid-column: 1 / -1;
    }
    @media only screen and (max-width: 48em) {
      padding: 2rem 5rem 0 5rem;
    }
    &:last-child {
      @media only screen and (max-width: 64em) {
        margin-bottom: 8rem;
      }
    }
    &__image {
    transition: 0.3s all;
      &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36rem;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &__name {
      margin: 0.6rem 0;
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      @media only screen and (max-width: 90em) {
        font-size: 3rem;
      }
      @media only screen and (max-width: 38em) {
        font-size: 2.5rem;
      }
    }
    &__description {
      flex: 1;
      font-size: 1.8rem;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.8);
      margin-bottom: 1.75rem;
            @media only screen and (max-width: 90em) {
        font-size: 2.25rem;
      }
      @media only screen and (max-width: 38em) {
        font-size: 2rem;
      }
    }
    &__price {
      margin-bottom: 2rem;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--blue);
    }   
  }
  .recommended__product-list .product__image-container {
    width: 40%;
  }
</style>