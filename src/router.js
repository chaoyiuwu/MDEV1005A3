import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Posts from './components/views/Posts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: Posts }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router