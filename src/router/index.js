import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sorting from '../views/Sorting.vue'

import BubbleSort from '../components/BubbleSort.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sorting',
    name: 'sorting',
    component: Sorting,
    children:[
      {
        path: 'insertionsort',
        name: 'insertionsort',
        component: BubbleSort
      },
      {
        path: 'bubblesort',
        name: 'bubblesort',
        component: BubbleSort
      },
      {
        path: '*', redirect: 'bubblesort'
      },
      {
        path: '/', redirect: 'bubblesort'
      }
    ]
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

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
//console.log(publicPath +"            publicPath "); 

export default router
