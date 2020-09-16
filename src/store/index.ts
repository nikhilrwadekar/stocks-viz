import { AxiosResponse } from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import APIService from "../api"


// Helpers
// import debounce from "lodash/debounce";
// Modules
// import auth from './auth';

Vue.use(Vuex)


const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

// Initial Store
const initial = {
  // Auth
  username: 'user',
  password: 'password',
  authenticated: true,

  // Results 
  history: {},
  search: {},

  // Search
  symbol: '',
  currentSearch: ''
}

export default new Vuex.Store({
  state: initial,
  mutations: {
    RESET_STORE(state, initial) {
      state = initial
    },
    SET_STOCK_HISTORY(state, history) {

      const symbol: string = history.metadata['2. Symbol'];
      const obj: object = {
        [symbol]: history.timeseries
      }

      state.history = { ...state.history, ...obj }
    },
    SET_CURRENT_HISTORY(state, symbol) {
      state.symbol = symbol
    },
    SET_SEARCH_SUGGESTIONS(state, search) {
      const keywords: string = search.keywords;
      const obj: object = {
        [keywords]: search.bestMatches
      }

      state.search = { ...state.search, ...obj }
    },
    SET_CURRENT_SEARCH(state, keywords) {
      state.currentSearch = keywords
    }
  },
  actions: {
    GET_STOCK_HISTORY(context, symbol: string) {

      // Todo DATE check!
      // Todo Closing check!

      // Todo Throttle Calls to the API
      const exists = context.getters.history[symbol]


      if (!exists) {
        APIService.get('', { params: { function: 'TIME_SERIES_DAILY', symbol } }).then((res: AxiosResponse) => {
          const { data } = res;
          const metadata = data['Meta Data'];
          const timeseries = data['Time Series (Daily)'];

          context.commit('SET_STOCK_HISTORY', { metadata, timeseries })
          // context.commit('SET_CURRENT_HISTORY',)
        })
      }
    },
    GET_SEARCH_SUGGESTIONS(context, keywords: string) {

      context.commit('SET_CURRENT_SEARCH', keywords);
      const exists = context.getters.search[keywords];

      if (!exists) {
        APIService.get('', { params: { function: 'SYMBOL_SEARCH', keywords } }).then((res: AxiosResponse) => {
          const { bestMatches } = res.data;

          context.commit('SET_SEARCH_SUGGESTIONS', { bestMatches, keywords });
        })
      }
    },
    LOGOUT(context) {
      context.commit('RESET_STORE', initial)
    }
  },
  getters: {
    history: (state) => {
      return state.history
    },
    symbol: (state) => {
      return state.symbol
    },
    search: (state, getters) => {
      return state.search
    },
    currentSearch: (state) => {
      return state.currentSearch
    },
    currentSearchResults: (state, getters) => {
      const { currentSearch, search } = getters;
      return search[currentSearch];
    },

    // Auth
    authenticated(state) {
      return state.authenticated;
    },
    username(state) {
      return state.username;
    }

  },
  modules: {
    // auth
  },
  plugins: [vuexLocal.plugin]
})
