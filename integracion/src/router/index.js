import { createRouter, createWebHistory } from 'vue-router'
import InicioPage from '../views/InicioPage.vue'

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  {
    path: '/',
    name: 'inicio',
    component: InicioPage,
  },
  {
    path: '/vif',
    name: 'vif',
    component: () => import('../views/IfPage.vue'),
  },
  {
    path: '/vfor',
    name: 'vfor',
    component: () => import('../views/ForPage.vue'),
  },
  {
    path: '/filtrados',
    name: 'filtrados',
    component: () => import('../views/FiltradosPage.vue'),
  },
],
})
export default router
