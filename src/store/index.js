import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchResult: []
  },
  actions: {
    setSearchValue ({ commit }, e) {
      commit('setSearch', e)
    },
    setSearchResult ({ commit }, payload) {
      commit('setResult', payload)
    }
  },
  mutations: {
    setSearch: (state, e) => (state.searchValue = e),
    setResult: (state, payload) => (state.searchResult = payload)
  },
  modules: {},
  getters: {
    getSearch: (state) => state.searchValue,
    getResult: (state) => state.searchResult
  }
})
