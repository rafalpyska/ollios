<template lang="html">

  <div class="content">
    <slot name="title"></slot>
    <slot name="text"></slot>
    <button class="btn__view-more">View more</button>
    <button class="btn__categories-toggle"></button>
  </div>

</template>

<script>
  export default {
    name: "Home"
  };
</script>

<style scoped lang="css">

.btn__view-more {
  border: none;
  color: rgba(255, 255, 255, .9);
  background-color: rgba(0, 35, 255, 1);
  padding: 1.5rem 4rem;
  border-radius: 2rem;
  margin-top: .75rem;
  font-weight: 700;
}

.btn__categories-toggle {
  position: absolute;
  top: 3rem;
  right: 3rem;
  width: 5rem;
  height: 5rem;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 1px #888;
}
</style>
