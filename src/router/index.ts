import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hideFromAuth: true },
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta: { requiresLogin: true },
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/graph/:symbol',
    name: 'Graph',
    meta: { requiresLogin: true },
    component: () => import(/* webpackChunkName: "graph" */ '../views/Graph.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
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
    next("/login")
  }


  // Hide Login if Signed In
  else if (to.matched.some(record => record.meta.hideFromAuth) && store.state.authenticated === true) {
    next(false)
  }


  next()
})

export default router
