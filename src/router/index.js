import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import MacaView from '../views/MacaView.vue'
import ColagenoView from '../views/ColagenoView.vue'
import DetoxView from '../views/DetoxView.vue'
import LipoView from '../views/LipoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/maca',
    name: 'about',
    component: MacaView
  },
  {
    path: '/colageno',
    name: 'about',
    component: ColagenoView
  },
  {
    path: '/detox',
    name: 'about',
    component: DetoxView
  },
  {
    path: '/lipo',
    name: 'about',
    component: LipoView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



