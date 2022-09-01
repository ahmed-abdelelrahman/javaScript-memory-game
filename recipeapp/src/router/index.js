import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import recipe from '../views/recipe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe',
    name: 'recipe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:recipe
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
