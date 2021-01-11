<template lang="html">
  <section class="slider">  
    <vueper-slides
      fade
      autoplay
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      fixed-height="100vh"
      :touchable="false"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      >
        <template v-slot:content>
          <div class="vueperslide__content-wrapper" style="justify-content: initial">
            <h1 class="title">{{slide.title}}</h1>
            <h2 class="subtitle">{{slide.content}}</h2>
            <AppButton :to="'/about-us'" class="btn__view-more">
              View More
            </AppButton>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import AppButton from '@/components/AppButton';


export default {
  name: 'Home',
  components: {
    VueperSlides,
    VueperSlide,
    AppButton
  },
  data() {
    return {
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
        {
          title: 'Ollios',
          content: 'Newest furniture shop',
          image: require('@/assets/background2.jpg')
        },
        {
          title: 'Ollios',
          content: 'The coolest furniture shop in the world',
          image: require('@/assets/background.png')
        },
        {
          title: 'Ollios',
          content: 'Satisfaction of our clients is the most important thing',
          image: require('@/assets/background3.jpg')
        }
      ],
    };
  }
};
</script>

<style scoped lang="scss">
  .slider {
    padding-left: 14.5rem;
    @media only screen and (max-width: 64em) {
      padding-left: 0;
    }
  }
  .title,
  .subtitle {
    margin: 0;
    padding: 0.75rem;
    text-transform: uppercase;
  }
  .title {
    font-size: 14rem;
    font-weight: 300;
    @media only screen and (max-width: 64em) {
      padding-top: 8rem;
      font-size: 7rem;
    }
  }
  .subtitle {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 3rem;
    @media only screen and (max-width: 34.125em) {
      font-size: 2.5rem;
    }
  }
</style>
