<template lang="html">
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link :to="{ name: 'home' }" class="navigation__button">
            <img src="../assets/navigation/logo.png" alt="" class="navigation__icon icon__logo"/>
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'home' }" class="navigation__button">
            <span class="navigation__icon icon__home" aria-label="Home page"></span>
          </router-link>
        </li>
        <li class="navigation__item">
          <button @click="cartToggle" class="navigation__button">
            <span class="navigation__icon icon__basket" aria-label="Basket"></span>
          </button>
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'search' }" class="navigation__button">
            <span class="navigation__icon icon__search" aria-label="Search"></span>
          </router-link>
        </li>

      </ul>
    </nav>
  </header>

</template>

<script>

  import {EventBus} from "@/event-bus.js"
  import preventScroll from "../mixins/preventScroll"

  export default {
    name: "Navigation",
    mixins: [preventScroll],
    data() {
      return {
        toggleCart: false,
        toggleSearch: false
      }
    },
    created() {
      EventBus.$on('cartClosed', (closed) => {
        this.toggleCart = closed;
        this.preventScroll(this.toggleCart);
      });
    },
    beforeDestroy() {
      EventBus.$off('cartClosed');
    },
    methods: {
      cartToggle() {
        this.toggleCart = !this.toggleCart;
        EventBus.$emit('isActiveCart', this.toggleCart);
        this.preventScroll(this.toggleCart);
      },
    }
  };

</script>

<style scoped lang="scss">
  .ovHidden {
    overflow: hidden;
  }

  .header {
    display: flex;
    position: fixed;
    width: 8rem;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
    box-shadow: 4px 0 5px rgba(0, 0, 0, .1);
    z-index: 11;
    @media only screen and (max-width: 62em) {
      width: 100%;
      height: auto;
      bottom: 0;
    }
  }

  .navigation {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
    &:first-child {
      margin-bottom: 5rem;
      @media only screen and (max-width: 62em) {
        margin-bottom: 0;
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      text-transform: uppercase;
      @media only screen and (max-width: 62em) {
        flex-direction: row;
        justify-content: center;
      }
    }

    &__item {
      list-style-type: none;
      align-self: center;
      padding: 2.5rem 1.5rem;
    }



    &__button {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      justify-content: flex-end;
      border: 0;
      background: none;
      cursor: pointer;
      opacity: .5;
      transition: .3s opacity;
      &:hover,
      &:focus {
        opacity: 1;
      }
    }

    &__icon {
      width: 25px;
      height: 25px;
      background-position: right center;
      background-repeat: no-repeat;
      background-size: contain;
      align-items: center;
      margin-left: 1.5rem;
    }
  }

  .icon {
    &__home {
      background-image: url('../assets/navigation/home.png');
    }

    &__basket {
      background-image: url('../assets/navigation/basket.png');
    }

    &__search {
      background-image: url('../assets/navigation/search.png');
    }
  }

  .margin-auto {
    margin-bottom: auto;
  }
</style>
