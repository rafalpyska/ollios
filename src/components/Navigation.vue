<template lang="html">

  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <img src="../assets/logo.png" alt="" class="navigation__icon icon__logo" />
        </a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <svg class="navigation__icon icon__home" aria-label="Home page">
            <use xlink:href="../assets/home.svg"></use>
          </svg>
        </a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <svg class="navigation__icon icon__basket" aria-label="Home page">
            <use xlink:href="../assets/basket.svg"></use>
          </svg>
        </a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <svg class="navigation__icon icon__search" aria-label="Basket">
            <use xlink:href="../assets/search.svg"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  
</template>

<script>

  export default {
    name: "Navigation"
  };

</script>

<style scoped lang="css">

  .navigation__item {
    list-style-type: none;
  }
</style>
