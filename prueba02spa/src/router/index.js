import { createRouter, createWebHistory } from 'vue-router'
import InicioPage from '../views/InicioPage.vue'
import EjemploPage from '../views/EjemploPage.vue'

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
{
path: '/',
name: 'inicio',
component: InicioPage,
},
{
path: '/ejemplo',
name: 'ejemplo',
component: EjemploPage,
},
{
path: '/acerca',
name: 'acerca',
component: () => import('../views/AcercaPage.vue'),
},
],
})
export default router
