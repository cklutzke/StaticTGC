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
