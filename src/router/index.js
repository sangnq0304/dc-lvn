import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../layouts/LayoutDefault.vue'),
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
    ],
  },

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/404')
  },
  {
    path: '/sangnq',
    name: 'sangnq',
    component: () => import(/* webpackChunkName: "sangnq" */ '../views/sangnq')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
