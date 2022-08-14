import { createRouter, createWebHistory } from 'vue-router'
import HomeSight from '../views/HomeSight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSight
    }
  ]
})

export default router
