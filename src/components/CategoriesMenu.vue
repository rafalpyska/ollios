<template lang="html">
  <transition name="slide-fade">
    <aside v-show="active" class="categories__container">
      <nav class="categories">
        <ul class="categories__list">
          <li class="categories__item" v-for="category in dataToDisplay" :key="category.id">
            <router-link :to="category.route" class="categories__link">{{ category.title }} <span
              class="categories__icons" :class="category.class"></span></router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script>
  import axios from 'axios';
  import { EventBus } from "@/event-bus.js";
  const API = '/static/products.json';

  export default {
    name: "CategoriesMenu",
    data() {
      return {
        data: [],
        dataToDisplay: [],
        active: false,
      }
    },
    watch: {
      '$route' () {
        this.active = false;
      }
    },
    created() {
      axios.get(API)
        .then((response) => {
          this.data = response.data[0];
          for (let key in this.data) {
            if (!this.data.hasOwnProperty(key)) continue;
            this.dataToDisplay = this.data[key];
          }
          this.status = false;
        })
        .catch((error) => {
          console.log(error);
        });
      EventBus.$on('toggleActive', (active) => {
        this.active = active;
      });
      EventBus.$on('routeChange', (routeFalse) => {
        this.active = routeFalse;
      });
    },
    beforeDestroy() {
      EventBus.$off('toggleActive');
      EventBus.$off('routeChange');
    }
  };

</script>

<style scoped lang="scss">

  .categories {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    &__container {
      display: flex;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .9);
      padding: 0 7rem;
      z-index: 10;
      @media only screen and (max-width: 62em) {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        z-index: 11;
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      text-transform: uppercase;
      @media only screen and (max-width: 62em) {
        width: 100%;
      }
    }
    &__item {
      display: flex;
      justify-content: flex-end;
      margin: 3.75rem 0;
      @media only screen and (max-width: 62em) {
        justify-content: center;
      }
    }
    &__link {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      padding-right: 2rem;
      justify-content: flex-end;
      color: rgba(193, 193, 193, .9);
      opacity: .7;
      transition: .3s all;
      &:hover {
        opacity: 1;
      }
      &:link,
      &:visited {
        text-decoration: none;
      }
    }
    &__icons {
      width: 5rem;
      height: 5rem;
      background-position: right center;
      background-repeat: no-repeat;
      background-size: contain;
      align-items: center;
      margin-left: 3rem;
    }
  }

  .icon {
    &__living-room {
      background-image: url('../assets/categories/livingroom.png');
    }
    &__office {
      background-image: url('../assets/categories/office.png');
    }
    &__for-kids {
      background-image: url('../assets/categories/forkids.png');
    }
    &__kitchen {
      background-image: url('../assets/categories/kitchen.png');
    }
    &__accessories {
      background-image: url('../assets/categories/accessories.png');
    }
  }

  .categories__link-all:link,
  .categories__link-all:visited {
    padding: 2rem;
    margin-bottom: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(0, 35, 255, 1);
  }

  .router-link-active {
    opacity: 1;
    font-weight: bold;
    border-right: 2px solid rgba(193, 193, 193, 1)
  ;;
  }

</style>
