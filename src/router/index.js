import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Hengsheng Li | TUM ECE Student',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 70, // offset for fixed header
      }
    }
    return { top: 0 }
  },
})

// 更新页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Hengsheng Li - Portfolio'
  next()
})

export default router
