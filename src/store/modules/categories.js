import axios from 'axios'

export default {
  state: {
    categoriesLoading: true,
    categoriesError: null,
    categories: [],
    singleCategoryLoading: true,
    singleCategoryError: null,
    singleCategory: []
  },
  getters: {
    categoriesLoadingStatus(state) {
      return state.categoriesLoading;
    },
    categoriesError(state) {
      return state.categoriesError;
    },
    categories(state) {
      return state.categories;
    },
    singleCategoryLoadingStatus(state) {
      return state.singleCategoryLoading;
    },
    singleCategoryError(state) {
      return state.singleCategoryError;
    },
    singleCategory(state) {
      return state.singleCategory;
    }
  },
  mutations: {
    SET_CATEGORIES_LOADING(state, loadingStatus) {
      return state.categoriesLoading = loadingStatus;
    },
    SET_CATEGORIES_ERROR(state, error) {
      return state.categoriesError = error;
    },
    SET_CATEGORIES(state, categories) {
      return state.categories = categories;
    },
    SET_SINGLE_CATEGORY_LOADING(state, loadingStatus) {
      return state.singleCategoryLoading = loadingStatus;
    },
    SET_SINGLE_CATEGORY_ERROR(state, error) {
      return state.singleCategoryError = error;
    },
    SET_SINGLE_CATEGORY(state, singleCategory) {
      return state.singleCategory = singleCategory;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit('SET_CATEGORIES_LOADING', true);
      return await axios.get(`http://localhost:1337/categories`)
        .then(( { data } ) => {
          commit('SET_CATEGORIES', data);
          commit("SET_CATEGORIES_LOADING", false);
        })
        .catch(error => {
          commit('SET_CATEGORIES_ERROR', error);
        });
    },
    async fetchSingleCategory({ commit }, categorySlug) {
      commit('SET_SINGLE_CATEGORY_LOADING', true);
      return await axios.get(`http://localhost:1337/categories?slug=${categorySlug}`)
      .then(( { data } ) => {
        commit('SET_SINGLE_CATEGORY', data);
        commit("SET_SINGLE_CATEGORY_LOADING", false);
      })
      .catch(error => {
        commit('SET_SINGLE_CATEGORY_ERROR', error);
      });
    }
  }
}