import Vue from 'vue'
import VueRouter from 'vue-router'

import Tmdb from '@/views/Tmdb'
import YouTube from '@/views/YouTube'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tmdb',
    component: Tmdb
  },
  {
    path: '/YouTube',
    name: 'YouTube',
    component: YouTube
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
