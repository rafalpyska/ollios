<template lang="html">
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link :to="{ name: 'home' }" class="navigation__button">
            <img
              src="@/assets/navigation/logo.png"
              alt=""
              class="navigation__icon icon__logo"
            />
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'home' }" exact class="navigation__button">
            <span aria-label="Home page"></span>
            <svg
              class="navigation__icon icon__home "
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 486.988 486.988"
              style="enable-background:new 0 0 486.988 486.988;"
              xml:space="preserve"
            >
              <path
                d="M16.822,284.968h39.667v158.667c0,9.35,7.65,17,17,17h116.167c9.35,0,17-7.65,17-17V327.468h70.833v116.167
                  c0,9.35,7.65,17,17,17h110.5c9.35,0,17-7.65,17-17V284.968h48.167c6.8,0,13.033-4.25,15.583-10.483
                  c2.55-6.233,1.133-13.6-3.683-18.417L260.489,31.385c-6.517-6.517-17.283-6.8-23.8-0.283L5.206,255.785
                  c-5.1,4.817-6.517,12.183-3.967,18.7C3.789,281.001,10.022,284.968,16.822,284.968z M248.022,67.368l181.333,183.6h-24.367
                  c-9.35,0-17,7.65-17,17v158.667h-76.5V310.468c0-9.35-7.65-17-17-17H189.656c-9.35,0-17,7.65-17,17v116.167H90.489V267.968
                  c0-9.35-7.65-17-17-17H58.756L248.022,67.368z"
              />
            </svg>
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'Cart' }" class="navigation__button">
            <span aria-label="Basket" class="navigation__icon-container">
              <svg
                class="navigation__icon icon__basket"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 459.529 459.529"
                style="enable-background:new 0 0 459.529 459.529;"
                xml:space="preserve"
              >
                <path
                  d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
                  l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
                  s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
                  S7.65,55.231,17,55.231z"
                />
                <path
                  d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
                  S114.183,438.298,135.433,438.298z"
                />
                <path
                  d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
                  c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
                  C339.433,422.431,356.15,438.298,376.267,438.298z"
                />
              </svg>
              <transition name="fade">
                <span
                  class="navigation__products-in-basket-count"
                  v-if="cartItemCount > 0"
                >
                  {{ cartItemCount }}
                </span>
              </transition>
            </span>
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'Search' }" class="navigation__button">
            <span aria-label="Search">
              <svg
                class="navigation__icon icon__search"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 491.521 491.521"
                style="enable-background:new 0 0 491.521 491.521;"
                xml:space="preserve"
              >
                <path
                  d="M489.573,427.178L365.638,303.242l-62.395,62.395l123.936,123.935c2.597,2.597,6.805,2.597,9.403,0l52.992-52.992
			C492.17,433.984,492.17,429.776,489.573,427.178z"
                />
                <path
                  d="M349.145,286.75l-21.654-21.654c-2.597-2.597-6.806-2.597-9.403,0l-9.794,9.794l-17.223-17.222
			c47.035-63.239,42.041-152.973-15.345-210.36c-63.077-63.077-165.343-63.077-228.419,0c-63.075,63.076-63.076,165.342,0,228.418
			c57.388,57.386,147.123,62.381,210.361,15.345l17.223,17.222l-9.795,9.795c-2.596,2.597-2.596,6.805,0.001,9.402l21.653,21.655
			l5.283,5.282l62.395-62.395L349.145,286.75z M248.649,248.65c-48.151,48.151-126.219,48.151-174.372,0
			c-48.151-48.151-48.15-126.22,0.002-174.371c48.151-48.152,126.219-48.152,174.37,0
			C296.801,122.43,296.802,200.498,248.649,248.65z"
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
import { mapGetters } from 'vuex';
import { EventBus } from '@/event-bus.js';
import preventScroll from '@/mixins/preventScroll';

export default {
  name: 'Navigation',
  mixins: [preventScroll],
  data() {
    return {
      toggleCart: false,
      toggleSearch: false
    };
  },
  computed: {
    ...mapGetters([
      'cartItemCount'
    ])
  },
  created() {
    EventBus.$on('cartClosed', closed => {
      this.toggleCart = closed;
      this.preventScroll(this.toggleCart);
    });
    EventBus.$on('productsInBasket', item => {
      this.productsInBasket = item;
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
    }
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
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 4px 0 5px var(--shadow);
  z-index: 11;
  @media only screen and (max-width: 64em) {
    width: 100%;
    height: auto;
    bottom: 0;
  }
}

.navigation {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);

  &:first-child {
    margin-bottom: 5rem;
    @media only screen and (max-width: 64em) {
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
    @media only screen and (max-width: 64em) {
      flex-direction: row;
    }
  }

  &__item {
    display: flex;
    list-style-type: none;
    align-self: center;
    margin: 4.25rem 0;
    @media only screen and (max-width: 64em) {
      width: 100%;
      padding: 2.5rem 0.5rem;
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
    transition: 0.3s all;
    &-basket {
      position: relative;
    }
    &:hover .navigation__icon,
    &:focus .navigation__icon {
      fill: var(--blue);
    }
  }
  &__icon {
    width: 3rem;
    height: 3rem;
    &-container {
      position: relative;
    }
  }
  &__products-in-basket-count {
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    font-size: 1.5rem;
    color: var(--blue);
    font-weight: 700;
  }
}

.icon {
  &__logo {
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 10.25rem;
    @media only screen and (max-width: 64em) {
      margin-bottom: 0;
    }
  }

  &__home,
  &__basket,
  &__search {
    fill: rgba(0, 0, 0, 0.9);
    transition: 0.3s all;
  }
  &__home {
    margin-left: 3px;
  }
}

.margin-auto {
  margin-bottom: auto;
}

.router-link-active .navigation__icon {
  fill: var(--blue);
}
</style>
