<template lang="html">
  <transition name="slide-fade">
  <aside v-show="activeOrNot" class="categories__container">
    <nav class="categories">
      <ul class="categories__list">
        <li class="categories__item" v-for="category in categories" :key="category.id">
          <router-link :to="'/categories/' + category.id" class="categories__link">{{ category.name }} <span class="categories__icons" :class="category.class"></span></router-link>
        </li>
      </ul>
      <a class="categories__link-all" href="#">Show all categories</a>
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
          { name: 'Living room', id: 1, class: 'icon__living-room'},
          { name: 'Office', id: 2, class: 'icon__office'},
          { name: 'For kids', id: 3, class: 'icon__for-kids'},
          { name: 'Kitchen', id: 4, class: 'icon__kitchen'},
          { name: 'Accesories', id: 5, class: 'icon__accesories'}
        ]
      }
    },
    created() {
      EventBus.$on('toggleActive', (active) => {
        this.activeOrNot = active;
      });
    },
    methods: {
    }
  };
</script>

<style scoped lang="css">

  .categories__container {
    display: flex;
    flex: 0 0 17%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, .9);
    z-index: 2;
  }

  .categories {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .categories__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    text-transform: uppercase;
  }
  .categories__item {
    padding: 1.5rem 0;
  }
  .categories__link {
    align-items: center;
    margin-right: 1rem;
    justify-content: flex-end;
    color: rgba(216, 216, 216, .9);
    opacity: .7;
    transition: .3s opacity;
  }
  .categories__link:hover {
    opacity: 1;
  }
  .categories__link:link,
  .categories__link:visited {
    text-decoration: none;
  }
  .categories__icons {
    width: 50px;
    height: 50px;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    align-items: center;
    margin-left: 1.5rem;
  }
  .icon__living-room {
    background-image: url('../assets/categories/livingroom.png');
  }
  .icon__office {
    background-image: url('../assets/categories/office.png');
  }
  .icon__for-kids {
    background-image: url('../assets/categories/forkids.png');
  }
  .icon__kitchen {
    background-image: url('../assets/categories/kitchen.png');
  }
  .icon__accesories {
    background-image: url('../assets/categories/accesories.png');
  }
  .categories__link-all:link,
  .categories__link-all:visited {
    padding: 2rem;
    margin-bottom: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(0, 35, 255, 1);
  }

  .slide-fade-enter-active {
    transition: all .4s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter {
    transform: translateY(-100%);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(100%);
  }

</style>
