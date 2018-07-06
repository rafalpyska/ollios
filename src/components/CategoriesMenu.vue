<template lang="html">
  <aside class="categories__container">
    <button @click="categoriesToggle" class="btn__categories-toggle"></button>
    <nav :class="{ active: isActive }" class="categories">
      <ul class="categories__list">
        <li class="categories__item" v-for="category in categories" :key="category.id">
          <router-link :to="'/categories/' + category.id" class="categories__link">{{ category.name }} <span class="categories__icons" :class="category.class"></span></router-link>

        </li>
      </ul>
      <a class="categories__link-all" href="#">Show all categories</a>
    </nav>
  </aside>

</template>

<script>

  export default {
    name: "CategoriesMenu",
    data() {
      return {
        isActive: false,
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
      categoriesToggle() {
        this.isActive = !this.isActive;
      }
    }
  };
</script>

<style scoped lang="css">

  .categories__container {
    display: flex;
    flex: 0 0 17%;
  }

  .btn__categories-toggle {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 1px #888;
    cursor: pointer;
  }
  .categories {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
  }

  .categories.active {
    display: flex;
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

</style>
