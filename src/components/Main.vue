<template lang="html">
    <Slides :image="images[chosenImage]"/>

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
            subtitle: 'Newest furniture shop template',
            url: 'background.png'
          },
          {
            id: 1,
            title: 'Ollios',
            subtitle: 'Newest furniture shop template',
            url: 'background2.jpg'
          },
          {
            id: 2,
            title: 'Ollios',
            subtitle: 'Newest furniture shop template',
            url: 'background3.jpg'
          }
        ],
        chosenImage: 0
      }
    },
    created() {
      setInterval(() => {
        this.move();
      }, 5000);
    },
    methods: {
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

<style scoped lang="css">

</style>
