import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Posts from './components/views/Posts.vue'
import Interests from './components/views/Interests.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', 
    component: About, 
    children: [{
      path: ':name/interests', component: Interests
    }] },
  { path: '/posts', component: Posts }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router