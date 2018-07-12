<template lang="html">
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link :to="'/'" class="navigation__button">
            <img src="../assets/navigation/logo.png" alt="" class="navigation__icon icon__logo" />
          </router-link>
        </li>
        <li class="navigation__item">
          <router-link :to="'/'" class="navigation__button">
            <span class="navigation__icon icon__home" aria-label="Home page"></span>
          </router-link>
        </li>
        <li class="navigation__item">
          <button class="navigation__button">
            <span class="navigation__icon icon__basket" aria-label="Basket"></span>
          </button>
        </li>
        <li class="navigation__item margin-auto">
          <button @click="navigationToggle" class="navigation__button">
            <span class="navigation__icon icon__search" aria-label="Search"></span>
          </button>
        </li>
        <li class="navigation__item">
          <button class="navigation__button">
            <span class="navigation__icon icon__download" aria-label="Download"></span>
          </button>
        </li>
      </ul>
    </nav>
  </header>

</template>

<script>

  import { EventBus } from "@/event-bus.js";

  export default {
    name: "Navigation",
    data() {
      return {
        toggle: false
      }
    },
    methods: {
      navigationToggle() {
        this.toggle = !this.toggle;
        EventBus.$emit('isActive', this.toggle);
      }
    }
  };

</script>

<style scoped lang="css">

  .header {
    display: flex;
    position: fixed;
    width: 8rem;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
    box-shadow: 4px 0 5px -2px rgb(0, 0, 0, .1);
    z-index: 3;
  }

  .navigation {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
  }

  .navigation__list {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    text-transform: uppercase;
  }

  .navigation__item {
    list-style-type: none;
    align-self: center;
    padding: 2.5rem 1.5rem;
  }
  .navigation__item:first-child {
    margin-bottom: 5rem;
  }

  .navigation__button {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    justify-content: flex-end;
    border: 0;
    background: none;
    cursor: pointer;
    opacity: .5;
    transition: .3s opacity;
  }
  .navigation__button:hover,
  .navigation__button:focus {
    opacity: 1;
  }

  .navigation__icon {
    width: 25px;
    height: 25px;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    align-items: center;
    margin-left: 1.5rem;
  }

  .icon__home {
    background-image: url('../assets/navigation/home.png');
  }
  .icon__basket {
    background-image: url('../assets/navigation/basket.png');
  }
  .icon__search {
    background-image: url('../assets/navigation/search.png');
  }

  .icon__download {
    background-image: url('../assets/navigation/in.png');
  }
  .margin-auto {
    margin-bottom: auto;
  }
</style>
