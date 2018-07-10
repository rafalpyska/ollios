import Vue from 'vue'
import Router from 'vue-router'
import CategoriesMenu from '@/components/CategoriesMenu'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import Search from '@/components/Search'
import Categories from '@/components/Categories'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      component: Home
    },
    {
      path: '/categories',
      component: Categories
    }
  ]
})
