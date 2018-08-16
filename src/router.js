
/*
  A stub for this file is autogenerated when you create a new project that
  includes Vue Router from Vue CLI. It controls what views are injected
  into the <router-view> tag in App.vue. It also controls how the route is
  interpreted to determine what nav/department or product is displayed.
*/

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'
import STGCNav from './views/STGCNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // navName is the "department" to be displayed.
      path: '/nav/:navName',
      name: 'stgcnav',
      component: STGCNav,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: Product,
      props: true
    }
  ]
})
