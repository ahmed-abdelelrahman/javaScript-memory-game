import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import movieDetail from '../views/movieDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // route for specific movie
  {
    path:'/movie/:id',
    name:movieDetail,
    component:movieDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
