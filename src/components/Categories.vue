<template lang="html">

  <nav class="categories">
    <ul class="categories__list">
      <li class="categories__item" v-for="category in categories" :key="category.id">
        <router-link class="categories__link" :class="category.class" :to="{ name: '', params: {} }">{{ category.name }}</router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
  export default {
    name: "Categories",
    data() {
      return {
        categories: [
          { name: 'Living room', id: 1, class: 'icon__living-room'},
          { name: 'Office', id: 2, class: 'icon__office'},
          { name: 'For kids', id: 3, class: 'icon__for-kids'},
          { name: 'Kitchen', id: 4, class: 'icon__kitchen'},
          { name: 'Accesories', id: 5, class: 'icon__accesories'}
        ],
      }
    },
    methods: {

    }
  };
</script>

<style scoped lang="css">
  .categories__list {
    list-style: none;
    margin: 0;
    padding: 2rem;
  }
  .categories__item {
    padding: 2rem .5rem;
    height: 2.5rem;
  }
  .categories__link {
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    align-items: center;
  }
  .categories__link:link,
  .categories__link:visited {
    text-decoration: none;
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

</style>
