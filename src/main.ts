import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Chartkick from 'vue-chartkick'
import { Chart } from 'chart.js'
import i18n from './i18n'

Vue.use(Chartkick.use(Chart));
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let lang = to.params.lang;
  if(!lang) {
    lang = 'en' // or the fallback from .env
  }

  // Set the language with i18n
  i18n.locale = lang;
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
