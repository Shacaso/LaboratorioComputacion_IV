import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrudView from '../views/CrudView.vue'
import SaveView from '../views/SaveView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crud',
    name: 'crud',
    component: CrudView
  },
  {
    path: '/save/:id',
    name: 'save',
    component: SaveView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
