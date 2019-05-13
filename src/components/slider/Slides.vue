<template>
  <transition-group name="fade" mode="out-in" tag="div" id="slides">
    <div :key="image.id" :style="setBackgroundImage" class="content">
      <h1 class="title">{{ image.title }}</h1>
      <h2 class="subtitle">{{ image.subtitle }}</h2>
      <AppButton>
        <router-link :to="'/about-us'" class="btn__view-more">
          View More
        </router-link>
      </AppButton>
    </div>
  </transition-group>
</template>

<script>
  import AppButton from "../AppButton"

  export default {
    name: "Slides",
    components: {
      AppButton
    },
    props: {
      image: {
        type: Object,
        required: true
      }
    },
    computed: {
      setBackgroundImage() {
        return {backgroundImage: "url(" + require("../../assets/" + this.image.url) + ")"};
      }
    }
  }
</script>

<style lang="scss">

  .btn__view-more {
    &:link,
    &:visited {
      display: inline-block;
      color: var(--white);
      text-decoration: none;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    flex: 1;;
    text-align: center;
    text-transform: uppercase;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-left: 8rem;
    @media only screen and (max-width: 64em) {
      padding-left: 0;
    }
  }

  #slides {
    width: 100%;
    height: 100%;
  }

  .title,
  .subtitle {
    margin: 0;
    padding: .75rem;
  }

  .title {
    font-size: 22rem;
    font-weight: 300;
    @media only screen and (max-width: 64em) {
      padding-top: 8rem;
      font-size: 7rem;
    }
  }

  .subtitle {
    font-size: 3.6rem;
    font-weight: 300;
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
