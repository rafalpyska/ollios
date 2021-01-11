export default {
  methods: {
    preventScroll(item) {
      if (item === true) {
        document.body.classList.add('ovHidden');
      } else {
        document.body.classList.remove('ovHidden');
      }
    }
  }
};
