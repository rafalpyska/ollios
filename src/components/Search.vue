<template lang="html">
    <div class="search__container">
      <input class="search__input" type="search" name="search__input" value="">
      <label class="search__label"for="search__input">Type product that you are looking for</label>
    </div>
  </div>
</template>

<script>

import Navigation from './Navigation'

export default {
  name: "Search",
  component: Navigation
};

</script>

<style scoped lang="css">

.search__container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .9);
}

.search__input {
  font-family: 'Lato', sans-serif;
  font-size: 4rem;
  font-weight: 100;
  text-transform: uppercase;
  border: 0;
  border-bottom: 1px solid rgba(177, 177, 177, .9);
  background-color: transparent;
  padding: 1.5rem;
  width: 70%;
  margin-bottom: 1rem;
}

.search__label {
  color: rgba(177, 177, 177, .9);
}

</style>
