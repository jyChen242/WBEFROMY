import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home/Home.vue')
      },
      {
        path: 'article/:id',
        name: 'Article',
        component: () => import('../views/article/Article.vue')
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('../views/category/Category.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/admin/layout/AdminLayout.vue'),
    children: [
      {
        path: 'articles',
        name: 'AdminArticles',
        component: () => import('../views/admin/articles/ArticleList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 