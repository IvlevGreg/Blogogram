import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '@/pages/PostsPage.vue'
import PostPage from '@/pages/PostPage.vue'

import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    component: PostsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/post/:id',
    component: PostPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
