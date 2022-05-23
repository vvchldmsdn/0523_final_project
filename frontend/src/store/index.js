import Vue from 'vue'
import Vuex from 'vuex'

import articles from './modules/articles'
import accounts from './modules/accounts'
import movies from './modules/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { articles, accounts, movies },
})
