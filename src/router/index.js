import { createRouter, createWebHistory } from 'vue-router'

//Importación de vistas para el Huésped
import HomeView from '../views/huesped/HomeView.vue'
import DetailView from '../views/huesped/DetailView.vue'
import AccessView from '../views/huesped/AccessView.vue'
import PagosView from '../views/huesped/PagosView.vue'

//Importación de vistas para el Anfitrión
import PanelAnfitrion from '../views/anfitrion/PanelAnfitrion.vue'
import NuevoAirbnb from '../views/anfitrion/NuevoAirbnb.vue'
import EditarAirbnb from '../views/anfitrion/EditarAirbnb.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    //Inician rutas para el huésped
    {
      path: '/',
      name: 'inicio',
      component: () => HomeView
    },
    {
      path: '/detalle/:id',
      name: 'detalle',
      component: () => DetailView
    },
    {
      path: '/acceder',
      name: 'acceder',
      component: AccessView
    },
    {
      path: '/pagos',
      children: [
        {
          path: ':id',
          name: 'pagos',
          component: () => PagosView
        }
      ]
    },

    //Inician rutas para el anfitrión
    {
      path: '/panel',
      name: 'panel',
      component: PanelAnfitrion
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: NuevoAirbnb
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarAirbnb
    }
  ]
})

export default router
