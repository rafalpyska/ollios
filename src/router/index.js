import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Categories from '@/components/Categories'
import LivingRoom from '@/components/LivingRoom'
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
