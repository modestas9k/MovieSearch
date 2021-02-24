import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchResult: [],
    alreadyWatched: [],
    wantToWatch: []
  },
  actions: {
    setSearchValue ({ commit }, e) {
      commit('setSearch', e)
    },
    setSearchResult ({ commit }, payload) {
      commit('setResult', payload)
    },
    setAlreadyWatched ({ commit }, e) {
      commit('setWatched', e)
    },
    setWantToWatch ({ commit }, e) {
      commit('setWatch', e)
    }
  },
  mutations: {
    setSearch: (state, e) => (state.searchValue = e),
    setResult: (state, payload) => (state.searchResult = payload),
    setWatched: (state, e) => (state.alreadyWatched.push(e)),
    setWatch: (state, e) => (state.wantToWatch.push(e))
  },
  modules: {},
  getters: {
    getSearch: (state) => state.searchValue,
    getResult: (state) => state.searchResult,
    getAlreadyWatched: (state) => state.alreadyWatched,
    getWantToWatch: (state) => state.wantToWatch
  }
})
