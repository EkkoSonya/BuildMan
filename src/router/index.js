import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../homepage/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../homepage/AboutView.vue')
  },
  {
    path: '/builds',
    name: 'builds',
    component: () => import('../builds/builds.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../login/login.vue')
  },
  {
    path: '/test-lines',
    name: 'Test-lines',
    component: () => import('../TestLines/test.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
