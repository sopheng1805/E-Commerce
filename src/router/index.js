import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login.vue'
import Register from '../view/Register.vue'
import Narbar from '../components/Layout/Narbar.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Narbar
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})