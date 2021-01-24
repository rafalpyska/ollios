export default {
  methods: {
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(
        el
      );
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    }
  }
};
