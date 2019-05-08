import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Categories from '@/components/Categories'
import AboutUs from '@/components/AboutUs'
import LivingRoom from '@/components/LivingRoom'
import Office from '@/components/Office'
import ForKids from '@/components/ForKids'
import Kitchen from '@/components/Kitchen'
import Accesories from '@/components/Accesories'
import ProductDetails from '@/components/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      component: Categories,
      props: true
    },
    {
      path: '/about-us',
      component: AboutUs,
      props: true
    },
    {
      path: '/category-living-room',
      name: 'LivingRoom',
      component: LivingRoom,
      children: [
        {
          path: ':product',
          component: ProductDetails,
          props: true
        }
      ],
      props: true
    },
    {
      path: '/category-office',
      name: 'Office',
      component: Office,
      children: [
        {
          path: ':product',
          component: ProductDetails,
          props: true
        }
      ],
      props: true
    },
    {
      path: '/category-for-kids',
      name: 'ForKids',
      component: ForKids,
      children: [
        {
          path: ':product',
          component: ProductDetails,
          props: true
        }
      ],
      props: true
    },
    {
      path: '/category-kitchen',
      name: 'Kitchen',
      component: Kitchen,
      children: [
        {
          path: ':product',
          component: ProductDetails,
          props: true
        }
      ],
      props: true
    },
    {
      path: '/category-accesories',
      name: 'Accesories',
      component: Accesories,
      children: [
        {
          path: ':product',
          component: ProductDetails,
          props: true
        }
      ],
      props: true
    },
    {
      path: '/product-details',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
