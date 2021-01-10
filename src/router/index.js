import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Categories from '@/views/Categories'
import AboutUs from '@/components/AboutUs'
import CategoryProducts from '@/components/CategoryProducts'
import ProductDetails from '@/components/ProductDetails'
import Search from '@/components/Search'
import NotFound from "../components/NotFound";

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
      path: '/category',
      name: 'Categories',
      component: Categories,
      children: [
        {
          path: ':categorySlug',
          component: CategoryProducts,
          name: "CategoryProducts",
          props: true,
        }
      ],
      props: true
    },
    {
      path: '/:productID',
      component: ProductDetails,
      name: "ProductDetails",
      props: true,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: '/:products',
          component: ProductDetails,
          props: true,
        }
      ],
      props: true
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
