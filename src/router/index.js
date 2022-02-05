import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import ResetPassword from '../views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component:Blogs
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component:Registration
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component:ResetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router
