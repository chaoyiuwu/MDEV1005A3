import { createWebHistory, createRouter } from 'vue-router'

// Keep Home eagerly loaded
import Home from './components/views/Home.vue'

// Lazy load About and Posts
const About = () => import('./components/views/About.vue')
const Posts = () => import('./components/views/Posts.vue')

// Also lazy load MoreAbout if needed
const MoreAbout = () => import('./components/views/MoreAbout.vue')

const routes = [
  { path: '/', component: Home },
  { 
    path: '/about', 
    component: About, 
    children: [
      { path: ':name/moreabout', component: MoreAbout }
    ] 
  },
  { path: '/posts', component: Posts }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router