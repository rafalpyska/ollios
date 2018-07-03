import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: ['Categories', 'Home', 'Navigation']
    }
  ]
})
