import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/about',
      component: Layout,
      children: [{
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
      }, {
        path: '/watchEffect',
        name: 'watchEffect',
        component: () => import('../views/WatchEffect.vue')
      },
      {
        path: '/provideInject',
        name: 'provideInject',
        component: () => import('../views/ProvideInject/Provider.vue')
      }]
    }
  ]
})

export default router
