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
            <span aria-label="Home page"></span>
            <svg class="navigation__icon icon__home"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="32px" height="32px">
              <path fill-rule="evenodd"
                    d="M13.000,3.743 L23.000,13.743 L23.000,29.000 L18.000,29.000 L18.000,22.000 C18.000,20.895 17.104,20.000 16.000,20.000 L10.000,20.000 C8.895,20.000 8.000,20.895 8.000,22.000 L8.000,29.000 L3.000,29.000 L3.000,13.743 L13.000,3.743 M13.884,0.384 C13.395,-0.105 12.604,-0.105 12.116,0.384 L0.586,11.914 C0.211,12.289 -0.000,12.798 -0.000,13.328 L-0.000,30.000 C-0.000,31.104 0.895,32.000 2.000,32.000 L9.000,32.000 C10.104,32.000 11.000,31.104 11.000,30.000 L11.000,23.000 L15.000,23.000 L15.000,30.000 C15.000,31.104 15.895,32.000 17.000,32.000 L24.000,32.000 C25.104,32.000 26.000,31.104 26.000,30.000 L26.000,13.328 C26.000,12.798 25.789,12.289 25.414,11.914 L13.884,0.384 Z"/>
            </svg>
          </router-link>
        </li>
        <li class="navigation__item">
          <button @click="cartToggle" class="navigation__button">
            <span aria-label="Basket">
              <svg class="navigation__icon icon__basket "
                   xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink"
                   width="36px" height="32px">
                <path fill-rule="evenodd"
                      d="M33.000,9.000 L27.905,9.000 C27.868,8.898 27.830,8.797 27.773,8.706 L22.774,0.706 C22.508,0.282 22.037,-0.000 21.500,-0.000 C20.672,-0.000 20.000,0.671 20.000,1.500 C20.000,1.791 20.083,2.063 20.227,2.294 L24.418,9.000 L11.582,9.000 L15.774,2.294 C15.917,2.063 16.000,1.791 16.000,1.500 C16.000,0.671 15.328,-0.000 14.500,-0.000 C13.963,-0.000 13.492,0.282 13.227,0.706 L8.227,8.706 C8.170,8.797 8.132,8.898 8.095,9.000 L3.000,9.000 C1.343,9.000 0.000,10.343 0.000,12.000 L0.000,14.000 C0.000,15.421 0.991,16.604 2.317,16.915 L6.121,29.848 C6.487,31.092 7.638,32.000 9.000,32.000 L27.000,32.000 C28.362,32.000 29.513,31.092 29.879,29.848 L33.683,16.915 C35.009,16.604 36.000,15.421 36.000,14.000 L36.000,12.000 C36.000,10.343 34.657,9.000 33.000,9.000 ZM3.000,12.000 L33.000,12.000 L33.000,14.000 L3.000,14.000 L3.000,12.000 ZM27.000,29.000 L8.999,29.002 L5.470,17.000 L30.530,17.000 L27.000,29.000 Z"
                />
                </svg>
            </span>
          </button>
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'search' }" class="navigation__button">
            <span aria-label="Search">
              <svg class="navigation__icon icon__search"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink"
                   width="32px" height="32px">
                <path fill-rule="evenodd"
                    d="M20.000,-0.000 C13.373,-0.000 8.000,5.373 8.000,12.000 C8.000,14.772 8.949,17.318 10.529,19.349 L0.439,29.439 C0.146,29.732 -0.000,30.115 -0.000,30.500 C-0.000,30.884 0.146,31.267 0.439,31.560 C0.732,31.853 1.116,32.000 1.500,32.000 C1.884,32.000 2.268,31.853 2.560,31.560 L12.650,21.471 C14.681,23.051 17.227,24.000 20.000,24.000 C26.627,24.000 32.000,18.627 32.000,12.000 C32.000,5.373 26.627,-0.000 20.000,-0.000 ZM20.000,21.000 C15.037,21.000 11.000,16.963 11.000,12.000 C11.000,7.037 15.037,3.000 20.000,3.000 C24.963,3.000 29.000,7.037 29.000,12.000 C29.000,16.963 24.963,21.000 20.000,21.000 Z"
                />
              </svg>
            </span>
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
    width: 14.5rem;
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
      }
    }

    &__item {
      display: flex;
      list-style-type: none;
      align-self: center;
      margin: 4.25rem 0;
      @media only screen and (max-width: 62em) {
        width: 100%;
        padding: 2.5rem .5rem;
        justify-content: center;
        margin: 0;
      }
    }

    &__button {
      display: flex;
      align-items: center;
      margin: 0;
      justify-content: flex-end;
      border: 0;
      background: none;
      cursor: pointer;
      transition: .3s all;
      &:hover .navigation__icon,
      &:focus .navigation__icon {
        fill: rgba(0, 35, 255, 0.9);
      }
    }
  }

  .icon {
    &__logo {
      width: 3.5rem;
      height: 3.5rem;
      margin-bottom: 10.25rem;
      @media only screen and (max-width: 62em) {
        margin-bottom: 0;
      }
    }


    &__home,
    &__basket,
    &__search {
      fill: rgb(216, 216, 216);
      transition: .3s all;
    }
  }

  .margin-auto {
    margin-bottom: auto;
  }

  .router-link-active .navigation__icon {
    fill: rgba(0, 35, 255, 0.9);
  }
</style>
