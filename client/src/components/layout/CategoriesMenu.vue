<template lang="html">
  <transition name="slide-fade">
    <aside v-show="active" class="categories__container">
      <nav class="categories">
        <ul class="categories__list">
          <li
            class="categories__item"
            v-for="category in categories"
            :key="category.id"
          >
            <router-link
              :to="{
                name: 'CategoryProductsList',
                params: { categorySlug: category.slug }
              }"
              class="categories__link"
              >{{ category.title }}
              <object
                class="categories__icons"
                :class="category.class"
                :data="getImgUrl(category.icon)"
                fill="#fff"
              ></object>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script>
import { EventBus } from '@/event-bus.js';
import getImageUrl from '@/mixins/getImageUrl';

export default {
  name: 'CategoriesMenu',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  watch: {
    $route() {
      this.active = false;
    }
  },
  mixins: [getImageUrl],

  created() {
    EventBus.$on('toggleActive', active => {
      this.active = active;
    });
    EventBus.$on('routeChange', routeFalse => {
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
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0 7rem;
    z-index: 10;
    @media only screen and (max-width: 29.25em) {
      width: 100%;
      background-color: var(--white);
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
    @media only screen and (max-width: 64em) {
      width: 100%;
    }
  }

  &__item {
    display: flex;
    justify-content: flex-end;
    margin: 3.75rem 0;
  }

  &__link {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding-right: 2rem;
    justify-content: flex-end;
    color: rgba(0, 0, 0, 0.9);
    transform: scale(1);
    transition: 0.3s all;

    &:hover {
      transform: scale(1.075);
    }

    &:link,
    &:visited {
      text-decoration: none;
    }
  }

  &__icons {
    width: 5rem;
    height: 5rem;
    align-items: center;
    margin-left: 3rem;
    fill: white;
  }
}

.categories__link-all:link,
.categories__link-all:visited {
  padding: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--blue);
}

.router-link-active {
  font-weight: bold;
  border-right: 3px solid var(----blue);
}
</style>
