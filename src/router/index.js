import { createRouter, createWebHistory } from 'vue-router'
import Home from '@Home.vue'
import About from '@About.vue'
import Contact from '@Contact.vue'
import Services from '@Services.vue'
// Add more views as needed

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
