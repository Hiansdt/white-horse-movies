import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeelingView from '../views/FeelingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/angry',
      name:'angry',
      component: FeelingView
    },
    {
      path:'/anxious',
      name:'anxious',
      component: FeelingView
    },
    {
      path:'/sad',
      name:'sad',
      component: FeelingView
    },
    {
      path:'/unmotivated',
      name:'unmotivated',
      component: FeelingView
    },
    {
      path:'/bored',
      name:'bored',
      component: FeelingView
    },
    {
      path:'/happy',
      name:'happy',
      component: FeelingView
    },
    {
      path:'/excited',
      name:'excited',
      component: FeelingView
    }
  ]
})

export default router
