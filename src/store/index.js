import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: 'top',
    searchResult: []
  },
  mutations: {
    setSearchValue (state, payload) {
      state.searchValue = payload
    }
  },
  actions: {},
  modules: {},
  getters: {
    getSearchValue (state) {
      return state.searchValue
    }
  }
})
