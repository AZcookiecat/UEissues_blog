import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component: ArticleDetail
    }
  ]
})

export default router