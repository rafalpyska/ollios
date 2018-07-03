import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: ['Categories', 'Home', 'Navigation']
    },
    {
      path: '/basket',
      name: 'Basket',
      component: ['Categories', 'Home', 'Navigation']
    },
    {
      path: '/search',
      name: 'Search',
      component: ['Categories', 'Home', 'Navigation']
    },
    {
      path: '/categories',
      name: 'Categories',
      component: ['Categories', 'Home', 'Navigation']
    },
  ]
})
