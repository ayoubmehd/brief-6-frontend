import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import("../views/Components.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/Register.vue")
  },
  {
    path: '/rendez-vous',
    name: 'RendezVous',
    component: () => import("../views/RendezVous.vue")
  },
  {
    path: '/add-rendez-vous',
    name: 'AddRendezVous',
    component: () => import("../views/AddRendezVous.vue")
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import("../views/Test.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
