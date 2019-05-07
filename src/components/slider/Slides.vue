<template>
  <transition-group name="fade" mode="out-in" tag="div" id="slides">
    <main :key="image.id" class="main" :style="setBackgroundImage">
      <div class="content">
        <h1 class="title">{{ image.title }}</h1>
        <h2 class="subtitle">{{ image.subtitle }}</h2>
        <AppButton>
          <router-link :to="'/about-us'" class="btn__view-more">
          View More
          </router-link>
        </AppButton>
      </div>
    </main>
  </transition-group>
</template>

<script>
  import AppButton from "../AppButton"

  export default {
    name: "Slides",
    components: {
      AppButton
    },
    props: ["image"],
    computed: {
      setBackgroundImage() {
        return { backgroundImage : "url("+ require("../../assets/" + this.image.url)+")"};
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn__view-more {
    &:link,
    &:visited {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
    }
  }

  #slides {
    width: 100%;
    height: 100%;
  }

  .main {
    width: 100%;
    height: 100vh;
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-left: 8rem;
  }

  .title {
    font-size: 12rem;
    font-weight: 300;
  }

  .subtitle {
    font-weight: 300;
  }

  .title,
  .subtitle {
    margin: 0;
    padding: .75rem;
  }

  .fade-move {
    transition: all 2s;
  }

  .fade-enter-active {
    animation-name: fadeEnter;
    animation-duration: 2s;
  }

  .fade-leave-active {
    position: absolute;
    animation-name: fadeLeave;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }

  @keyframes fadeEnter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeLeave {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

</style>
