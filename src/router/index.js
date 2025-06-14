// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import BlogPostsPage from '@/pages/BlogPostsPage.vue'
import LikedBlogsPage from '@/pages/LikedBlogsPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import BlogDetailPage from '@/pages/BlogDetailPage.vue'
import AddBlogPage from '@/pages/AddBlogPage.vue' 
import MyBlogPage from '@/pages/MyBlogPage.vue' 
import VerifyBlogsPage from '@/pages/VerifyBlogsPage.vue' 
import CallBackPage from '@/pages/CallBackPage.vue'

const routes = [
  { path: '/', name: 'Home', component: BlogPostsPage },
  { path: '/liked', name: 'Liked', component: LikedBlogsPage },
  { path: '/settings', name: 'Settings', component: SettingsPage },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  {
    path: '/blog/:id', 
    name: 'BlogDetail',
    component: BlogDetailPage, 
    props: true 
  },
  { path: '/my-blogs', name: 'MyBlogs', component: MyBlogPage },
  { path: '/add-blog', name: 'AddBlog', component: AddBlogPage },
  { path: '/verify-blogs', name: 'VerifyBlogs', component: VerifyBlogsPage },
  { path: '/callback', name: 'callback', component: CallBackPage },
]

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (!requiresAuth) return next()

  try {
    await Auth.currentAuthenticatedUser()
    next()
  } catch {
    next('/login')
  }
})


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
