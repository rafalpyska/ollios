import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Categories from '@/components/Categories'
import LivingRoom from '@/components/LivingRoom'
import Office from '@/components/Office'
import ForKids from '@/components/ForKids'
import Kitchen from '@/components/Kitchen'
import Accesories from '@/components/Accesories'
import ProductDetails from '@/components/ProductDetails'
import ShoppingCart from '@/components/ShoppingCart'

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
      path: '/category-office',
      name: 'Office',
      component: Office,
      props: true
    },
    {
      path: '/category-for-kids',
      name: 'ForKids',
      component: ForKids,
      props: true
    },
    {
      path: '/category-kitchen',
      name: 'Kitchen',
      component: Kitchen,
      props: true
    },
    {
      path: '/category-accesories',
      name: 'Accesories',
      component: Accesories,
      props: true
    },
    {
      path: '/product-details',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      props: true
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
