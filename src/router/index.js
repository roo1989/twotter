import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    components: () => import('../views/Home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
