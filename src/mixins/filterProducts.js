export default {
  computed: {
    filterProducts() {
      if (this.products && this.products.length) {
        return this.products.filter(item => {
          return item.title.toLowerCase().match(this.searchValue.toLowerCase());
        });
      }
    }
  }
};
