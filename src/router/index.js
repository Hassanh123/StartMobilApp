import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import AutoDetailsPage from '@/components/AutoDetails.vue'
import OverOnsPage from '@/components/OverOns.vue'
import LoginPage from '@/components/LoginPage.vue'


const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'AutoDetails', // Zorg ervoor dat de naam hier overeenkomt
    path: '/AutoDetails',
    component: AutoDetailsPage,
  },
  {
    name: 'OverOns', // Zorg ervoor dat de naam hier overeenkomt
    path: '/OverOns',
    component: OverOnsPage,
  },
  {
    name: 'Login', // Zorg ervoor dat de naam hier overeenkomt
    path: '/Login',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
