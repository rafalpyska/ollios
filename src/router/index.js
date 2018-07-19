import Vue from 'vue'
import Router from 'vue-router'
import CategoriesMenu from '@/components/CategoriesMenu'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Navigation from '@/components/Navigation'
import Search from '@/components/Search'
import Categories from '@/components/Categories'
import LivingRoom from '@/components/LivingRoom'
import ProductDetails from '@/components/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/categories',
      component: Categories,
      props: true
    },
    {
      path: '/category-living-room',
      name: 'LivingRoom',
      component: LivingRoom,
      props: true
    },
    {
      path: '/product-details',
      component: ProductDetails,
      props: true
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
