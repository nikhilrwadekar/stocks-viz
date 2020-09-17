import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// Modules
import auth from './modules/auth';
import search from './modules/search';
import results from './modules/results';

Vue.use(Vuex)


const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    auth,
    search,
    results
  },
  plugins: [vuexLocal.plugin]
})
