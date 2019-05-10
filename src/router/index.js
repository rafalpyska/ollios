import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Categories from '@/components/Categories'
import AboutUs from '@/components/AboutUs'
import ProductDetails from '@/components/ProductDetails'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      component: AboutUs,
      props: true
    },
    {
      path: '/category-living-room',
      name: 'LivingRoom',
      component: Categories,
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
      component: Categories,
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
      component: Categories,
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
      component: Categories,
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
      component: Categories,
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
      path: '/search',
      name: 'search',
      component: Search,
      props: true
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
