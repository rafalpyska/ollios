import Vue from 'vue'
import Router from 'vue-router'
import CategoriesMenu from '@/components/CategoriesMenu'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import Search from '@/components/Search'
import Categories from '@/components/Categories'
import LivingRoom from '@/components/LivingRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/categories',
      component: Categories,
    },
    {
      path: '/category-living-room',
      component: LivingRoom
    },
    {
      path: '/category-office',
      component: LivingRoom
    },
    {
      path: '/category-for-kids',
      component: LivingRoom
    },
    {
      path: '/category-kitchen',
      component: LivingRoom
    },
    {
      path: '/category-accesories',
      component: LivingRoom
    }
  ]
})
