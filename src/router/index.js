import Vue from 'vue'
import Router from 'vue-router'
import CategoriesMenu from '@/components/CategoriesMenu'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: ['CategoriesMenu', 'Home', 'Navigation']
    },
    {
      path: '/basket',
      name: 'Basket',
      component: ['CategoriesMenu', 'Home', 'Navigation']
    },
    {
      path: '/search',
      name: 'Search',
      component: ['CategoriesMenu', 'Home', 'Navigation']
    },
    {
      path: '/categories',
      name: 'Categories',
      component: ['CategoriesMenu', 'Home', 'Navigation']
    },
  ]
})
