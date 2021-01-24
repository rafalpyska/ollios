export default {
  state: {
    cart: []
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    },
    cartTotalItemPrice(state) {
      let total = 0;
      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      });
      return total;
    }
  },
  mutations: {
    INITIALISE_CART(state) {
      if(localStorage.getItem('cart')) {
        Object.assign(state.cart, JSON.parse(localStorage.getItem('cart')));
      }
    },
    ADD_TO_CART(state, { product, quantity }) {
      let itemInCart = state.cart.find(item => {
        return item.product.id === product.id;
      });

      if (itemInCart) {
        itemInCart.quantity += quantity;
        return;
      }
      state.cart.push({
        product,
        quantity
      });
      
    },
    REMOVE_ITEM_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
      });
      this.commit('ADD_CART_TO_LOCAL_STORAGE');
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    ADD_CART_TO_LOCAL_STORAGE(state) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  actions: {
    addItemToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    },
    removeItemFromCart({ commit }, product) {
      commit('REMOVE_ITEM_FROM_CART', product);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    }
  }
};
