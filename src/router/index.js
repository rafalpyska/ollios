import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Cart from '@/views/Cart';
import Search from '@/views/Search';
import Categories from '@/views/Categories';
import AboutUs from '@/components/AboutUs';
import CategoryProductsList from '@/components/CategoryProductsList';
import ProductDetails from '@/components/ProductDetails';
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
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      props: true
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
      path: '*',
      component: NotFound
    }
  ]
});
