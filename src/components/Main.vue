<template lang="html">
  <div class="slider">
    <Slides :image="images[chosenImage]"/>
    <div class="pagination">
      <div
        v-for="image in images" :key="image.id"
        @click="pagination(image.id)"
        class="pagination__dot">

      </div>
    </div>
  </div>


</template>

<script>
  import Slides from './slider/Slides'

  export default {
    name: "Main",
    components: {
      Slides
    },
    data() {
      return {
        images: [
          {
            id: 0,
            title: 'Ollios',
            subtitle: 'Newest furniture shop',
            url: 'background.png'
          },
          {
            id: 1,
            title: 'Ollios',
            subtitle: 'The coolest furniture shop in the world',
            url: 'background2.jpg'
          },
          {
            id: 2,
            title: 'Ollios',
            subtitle: 'Satisfaction of our clients is the most important thing',
            url: 'background3.jpg'
          }
        ],
        chosenImage: 0,
        intervalObject: null
      }
    },
    created() {
      this.intervalObject = setInterval(() => {
        this.move();
      }, 5000)
    },
    methods: {
      pagination(id) {
        this.chosenImage = id;
        clearInterval(this.intervalObject);
        this.intervalObject = setInterval(() => {
          this.move();
        }, 5000)
      },
      move() {
        let flag = this.chosenImage;
        flag++;
        if(flag >= this.images.length) {
          flag = 0;
        }
        this.chosenImage = flag;
      }
    }
  }
</script>

<style scoped lang="scss">
  .slider {
    width: 100%;
    height: 100vh;
  }
  .pagination {
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    height: 15px;
    margin: auto;
    text-align: center;

    &__dot {
      position: relative;
      width: 12px;
      height: 12px;
      border: 2px solid rgba(220, 220, 222, 1);
      border-radius: 100px;
      display: inline-block;
      cursor: pointer;
      margin: 0 4px;
      transition: .3s;
      &:not(:last-child) {
        margin-right: 1rem;
      }
      &--active {
        border-color:  rgba(0, 35, 255, .9);
        background: rgba(0, 35, 255, .9);
      }

      &:hover {
        transition: .3s;
        border-color:  rgba(0, 35, 255, .9);
        background: rgba(0, 35, 255, .9);

        &:before {
          top: -48px;
          opacity: 1;
        }

        &:after {
          top: -18px;
          opacity: 1;
        }
      }
    }
  }
</style>
