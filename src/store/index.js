import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchResult: [],
    alreadyWatched: JSON.parse(localStorage.getItem('alreadyWatched')) || [],
    wantToWatch: JSON.parse(localStorage.getItem('wantToWatch')) || []
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
    },
    removeFromAlreadyWatched ({ commit }, payload) {
      commit('removeFromAlreadyW', payload)
    },
    removeFromWantToWatch ({ commit }, payload) {
      commit('removeFromWantToW', payload)
    }
  },
  mutations: {
    setSearch: (state, e) => (state.searchValue = e),
    setResult: (state, payload) => (state.searchResult = payload),
    setWatched: (state, e) => {
      if (state.alreadyWatched.filter(i => i.id !== e.id)) {
        state.alreadyWatched.push({
          id: e.id,
          image: e.image,
          name: e.name,
          premiered: e.premiered
        })
        localStorage.setItem('alreadyWatched', JSON.stringify(state.alreadyWatched))
      }
    },
    setWatch: (state, e) => {
      if (state.wantToWatch.filter(i => i.id !== e.id)) {
        state.wantToWatch.push({
          id: e.id,
          image: e.image,
          name: e.name,
          premiered: e.premiered
        })
        localStorage.setItem('wantToWatch', JSON.stringify(state.wantToWatch))
      }
    },
    removeFromAlreadyW: (state, payload) => {
      state.alreadyWatched = state.alreadyWatched.filter(watched => watched.id !== payload.id)
      localStorage.setItem('alreadyWatched', JSON.stringify(state.alreadyWatched))
    },
    removeFromWantToW: (state, payload) => {
      state.wantToWatch = state.wantToWatch.filter(watch => watch.id !== payload.id)
      localStorage.setItem('wantToWatch', JSON.stringify(state.wantToWatch))
    }
  },
  modules: {},
  getters: {
    getSearch: (state) => state.searchValue,
    getResult: (state) => state.searchResult,
    getAlreadyWatched: (state) => state.alreadyWatched,
    getWantToWatch: (state) => state.wantToWatch
  }
})
