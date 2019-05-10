export default {
  computed: {
    filterProducts() {
      if (this.products) {
        return this.products.filter((item) => {
          return item.title.toLowerCase().match(this.searchValue.toLowerCase());
        })
      }
    }
  }
}
