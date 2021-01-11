import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Categories from '@/views/Categories';
import AboutUs from '@/components/AboutUs';
import CategoryProductsList from '@/components/CategoryProductsList';
import ProductDetails from '@/components/ProductDetails';
import Cart from '@/views/Cart';
import Search from '@/components/Search';
import NotFound from '../components/NotFound';

Vue.use(Router);

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
          component: CategoryProductsList,
          name: 'CategoryProductsList',
          props: true
        }
      ],
      props: true
    },
    {
      path: '/product/:productSlug',
      component: ProductDetails,
      name: 'ProductDetails',
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: '/:products',
          component: ProductDetails,
          props: true
        }
      ],
      props: true
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
