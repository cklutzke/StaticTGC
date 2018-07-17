import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PartShopper from './views/PartShopper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/parts',
      name: 'parts',
      component: PartShopper,
      props: true
    },
    {
      path: '/part/:partId',
      name: 'part',
      component: PartShopper,
      props: true
    }
  ]
})
