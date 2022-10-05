import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home/Home.vue')
  },
  {
    path: '/builds',
    name: 'builds',
    component: () => import('@/components/builds/builds.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/login.vue')
  },
  {
    path: '/test-lines',
    name: 'Test-lines',
    component: () => import('@/components/TestLines/test.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
