import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '../i18n'

import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
{
  path: '/',
  redirect: `/${i18n.locale}`
},
 {  
   path: '/:lang/',
   component: {
     render (c) { return c('router-view') }
   },
   children: [
      {  
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'login',
        name: 'Login',
        meta: { hideFromAuth: true },
        component: Login
      },
      {
        path: 'search',
        name: 'Search',
        meta: { requiresLogin: true },
        component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
      },
      {
        path: 'graph/:symbol',
        name: 'Graph',
        meta: { requiresLogin: true },
        component: () => import(/* webpackChunkName: "graph" */ '../views/Graph.vue')
      },
      {
        path: '*',
        component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
      }
    ]
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  // NO Auth Guard
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.authenticated === false) {
    console.log('you have to lgin')
    next(`/${i18n.locale}/login`)
  }


  // Hide Login if Signed In
  if (to.matched.some(record => record.meta.hideFromAuth) && store.state.authenticated === true) {
    next('/')
  }
  
  next()
})

export default router
