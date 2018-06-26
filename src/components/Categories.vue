<template lang="html">
  <nav class="categories">
    <ul class="categories__list">
      <li class="categories__item">
        <slot name="categories__link1">
          <slot name="categories__icon1"></slot>
        </slot>
      </li>
      <li class="categories__item">
        <slot name="categories__link2">
          <slot name="categories__icon2"></slot>
        </slot>
      </li>
      <li class="categories__item">
        <slot name="categories__link3">
          <slot name="categories__icon3"></slot>
        </slot>
      </li>
      <li class="categories__item">
        <slot name="categories__link4">
          <slot name="categories__icon4"></slot>
        </slot>
      </li>
      <li class="categories__item">
        <slot name="categories__link5">
          <slot name="categories__icon5"></slot>
        </slot>
      </li>
    </ul>

  </nav>
</template>

<script>
  export default {
    name: "Categories",
    data() {
      return {

      }
    },
    methods: {

    }
  };
</script>

<style scoped lang="css">

</style>
