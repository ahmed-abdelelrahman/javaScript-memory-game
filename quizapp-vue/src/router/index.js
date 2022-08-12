import { createRouter, createWebHashHistory } from 'vue-router'

import quizapp from '../views/quizapp.vue'

const routes = [
  {
    path: '/',
    name: 'quizapp',
    component: quizapp
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
