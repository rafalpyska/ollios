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
    ADD_TO_CART(state, { product, quantity }) {
      let itemInCart = state.cart.find(item => {
        return item.product.id === product.id
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
    }
  },
  actions: {
    addItemToCart({ commit }, { product, quantity  }) {
      commit('ADD_TO_CART', { product, quantity });
    },
    removeItemFromCart({ commit }, product) {
      commit('REMOVE_ITEM_FROM_CART', product);
    }
  }
};
