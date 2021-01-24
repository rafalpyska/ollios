import axios from 'axios';

export default {
  state: {
    productsLoading: true,
    productsError: null,
    products: [],
    singleProductLoading: true,
    singleProductError: null,
    singleProduct: [],
    recommendedProductsLoading: true,
    recommendedProductsError: null,
    recommendedProducts: []
  },
  getters: {
    productsLoadingStatus(state) {
      return state.productsLoading;
    },
    productsError(state) {
      return state.productsError;
    },
    products(state) {
      return state.products;
    },
    singleProductLoadingStatus(state) {
      return state.singleProductLoading;
    },
    singleProductError(state) {
      return state.singleProductError;
    },
    singleProduct(state) {
      return state.singleProduct;
    },
    recommendedProductsLoadingStatus(state) {
      return state.recommendedProductsLoading;
    },
    recommendedProductsError(state) {
      return state.recommendedProductsError;
    },
    recommendedProducts(state) {
      return state.recommendedProducts;
    }
  },
  mutations: {
    SET_PRODUCTS_LOADING(state, loadingStatus) {
      return (state.productsLoading = loadingStatus);
    },
    SET_PRODUCTS_ERROR(state, error) {
      return (state.productsError = error);
    },
    SET_PRODUCTS(state, products) {
      return (state.products = products);
    },
    SET_SINGLE_PRODUCT_LOADING(state, loadingStatus) {
      return (state.singleProductLoading = loadingStatus);
    },
    SET_SINGLE_PRODUCT_ERROR(state, error) {
      return (state.singleProductError = error);
    },
    SET_SINGLE_PRODUCT(state, singleProduct) {
      return (state.singleProduct = singleProduct);
    },
    SET_RECOMMENDED_PRODUCTS_LOADING(state, loadingStatus) {
      return (state.recommendedProductsLoading = loadingStatus)
    },
    SET_RECOMMENDED_PRODUCTS_ERROR(state, error) {
      return (state.recommendedProductsError = error)
    },
    SET_RECOMMENDED_PRODUCTS(state, recommendedProducts) {
      return (state.recommendedProducts = recommendedProducts);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_PRODUCTS_LOADING', true);
      return await axios
        .get(`http://localhost:1337/products`)
        .then(({ data }) => {
          commit('SET_PRODUCTS', data);
          commit('SET_PRODUCTS_LOADING', false);
        })
        .catch(error => {
          commit('SET_PRODUCTS_ERROR', error);
        });
    },
    async fetchSingleProduct({ commit }, productSlug) {
      commit('SET_SINGLE_PRODUCT_LOADING', true);
      return await axios
        .get(`http://localhost:1337/products?slug=${productSlug}`)
        .then(({ data }) => {
          commit('SET_SINGLE_PRODUCT', data);
          commit('SET_SINGLE_PRODUCT_LOADING', false);
        })
        .catch(error => {
          commit('SET_SINGLE_PRODUCT_ERROR', error);
        });
    },
    async fetchRecommendedProducts({ commit }) {
      commit('SET_RECOMMENDED_PRODUCTS_LOADING', true);
      return await axios
        .get(`http://localhost:1337/recommended-products`)
        .then(({ data }) => {
          commit('SET_RECOMMENDED_PRODUCTS', data);
          commit('SET_RECOMMENDED_PRODUCTS_LOADING', false);
        })
        .catch(error => {
          commit('SET_RECOMMENDED_PRODUCTS_ERROR', error);
        });
    },
  }
};
