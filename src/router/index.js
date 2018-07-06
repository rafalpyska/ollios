import Vue from 'vue'
import Router from 'vue-router'
import CategoriesMenu from '@/components/CategoriesMenu'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: ['CategoriesMenu', 'Home']
    },
    {
      path: '/basket',
      name: 'basket',
      component: ['CategoriesMenu', 'Home', 'Navigation']
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
