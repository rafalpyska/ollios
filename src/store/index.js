import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    categories
  }
})