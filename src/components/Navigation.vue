<template lang="html">

  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <img src="../assets/navigation/logo.png" alt="" class="navigation__icon icon__logo" />
        </a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <svg class="navigation__icon icon__home" aria-label="Home page">
            <path id="Home" class="cls-1" d="M72,228.743l10,10V254H77v-7a2,2,0,0,0-2-2H69a2,2,0,0,0-2,2v7H62V238.743l10-10m.884-3.359a1.25,1.25,0,0,0-1.768,0l-11.53,11.53A2,2,0,0,0,59,238.329V255a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2v-7h4v7a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2V238.329a2,2,0,0,0-.586-1.415Z" transform="translate(-59 -225.017)"/>
          </svg>
        </a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <svg class="navigation__icon icon__basket" aria-label="Home page">
            <path class="a" d="M87,350H81.9a1.507,1.507,0,0,0-.132-.294l-5-8a1.5,1.5,0,0,0-2.547,1.588L78.418,350H65.582l4.191-6.706a1.5,1.5,0,0,0-2.547-1.588l-5,8A1.506,1.506,0,0,0,62.1,350H57a3,3,0,0,0-3,3v2a3,3,0,0,0,2.317,2.915l3.8,12.934A3,3,0,0,0,63,373H81a3,3,0,0,0,2.879-2.151l3.8-12.934A3,3,0,0,0,90,355v-2A3,3,0,0,0,87,350Zm-30,3H87v2H57Zm24,17-18,0L59.47,358H84.53Z" transform="translate(-54 -341)"/>
          </svg>
        </a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">
          <svg class="navigation__icon icon__search" aria-label="Basket">
            <path class="a" d="M76,457a11.985,11.985,0,0,0-9.471,19.349l-10.09,10.09a1.5,1.5,0,1,0,2.121,2.121l10.09-10.09A12,12,0,1,0,76,457Zm0,21a9,9,0,1,1,9-9A9.01,9.01,0,0,1,76,478Z" transform="translate(-56 -457)"/>
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

  .navigation {
    height: 100%;
    width: 100%;
  }

  .navigation__list {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .navigation__item {
    list-style-type: none;
  }

  .navigation__icon {
    fill: rgba(216, 216, 216, .9);
    transition: .2s all;
  }
  .navigation__icon:hover {
    fill: rgba(0, 35, 255, .9);
  }
</style>
