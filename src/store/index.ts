import { AxiosResponse } from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import APIService from "../api"
Vue.use(Vuex)


const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    username: 'user',
    password: 'password',
    history: {},
    symbol: ''
  },
  mutations: {
    SET_STOCK_HISTORY(state, history) {

      const symbol: string = history.metadata['2. Symbol'];
      const obj: object = {
        [symbol]: history.timeseries
      }

      state.history = { ...state.history, ...obj }
    },
    SET_CURRENT_HISTORY(state, symbol) {
      state.symbol = symbol
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
          context.commit('SET_CURRENT_HISTORY',)
        })
      }
    }
  },
  getters: {
    history: (state) => {
      return state.history
    },
    symbol: (state) => {
      return state.symbol
    },

  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
