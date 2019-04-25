<template lang="html">
  <transition name="slide-fade">
    <aside v-show="activeOrNot" class="categories__container">
      <nav class="categories">
        <ul class="categories__list">
          <li class="categories__item" v-for="category in categories" :key="category.id">
            <router-link :to="category.route" class="categories__link">{{ category.name }} <span
              class="categories__icons" :class="category.class"></span></router-link>
          </li>
        </ul>
        <router-link :to="'/categories'" class="categories__link-all" href="#">Show all categories</router-link>
      </nav>
    </aside>
  </transition>
</template>

<script>

  import { EventBus } from "@/event-bus.js";

  export default {
    name: "CategoriesMenu",
    data() {
      return {
        activeOrNot: false,
        categories: [
          { name: 'Living room', id: 1, route: 'category-living-room', class: 'icon__living-room'},
          { name: 'Office', id: 2, route: 'category-office', class: 'icon__office'},
          { name: 'For kids', id: 3, route: 'category-for-kids', class: 'icon__for-kids'},
          { name: 'Kitchen', id: 4, route: 'category-kitchen', class: 'icon__kitchen'},
          { name: 'Accesories', id: 5, route: 'category-accesories', class: 'icon__accesories'}
        ]
      }
    },
    created() {
      EventBus.$on('toggleActive', (active) => {
        this.activeOrNot = active;
      });
      EventBus.$on('routeChange', (routeFalse) => {
        this.activeOrNot = routeFalse;
      });
    },
    methods: {
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
      flex: 0 0 17%;
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
      padding: 1.5rem 0;
    }
    &__link {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      justify-content: flex-end;
      color: rgba(216, 216, 216, .9);
      opacity: .7;
      transition: .3s opacity;
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

</style>
