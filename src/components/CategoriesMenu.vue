<template lang="html">
  <transition name="slide-fade">
    <aside v-show="activeOrNot" class="categories__container">
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
        activeOrNot: false,
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
        this.activeOrNot = active;
      });
      EventBus.$on('routeChange', (routeFalse) => {
        this.activeOrNot = routeFalse;
      });
    },
    watch: {
      '$route' () {
        this.activeOrNot = false;
      }
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
    &__container {
      display: flex;
      width: 16%;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .9);
      z-index: 3;
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
    }
    &__item {
      padding: 1.75rem 0;
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
      width: 50px;
      height: 50px;
      background-position: right center;
      background-repeat: no-repeat;
      background-size: contain;
      align-items: center;
      margin-left: 1.5rem;
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
    &__accesories {
      background-image: url('../assets/categories/accesories.png');
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

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all .4s ease;
  }

  .slide-fade-enter {
    transform: translateY(-100%);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateY(-100%);
  }

  .router-link-active {
    opacity: 1;
    font-weight: bold;
    border-right: 2px solid rgba(193, 193, 193, 1)
  ;;
  }

</style>
