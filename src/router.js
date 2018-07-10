import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import MeepleShopper from './views/MeepleShopper.vue'

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
      path: '/meeples',
      name: 'meeples',
      component: MeepleShopper
    },
    {
      path: '/part/:partId',
      name: 'part',
      component: MeepleShopper,
      props: true
    }
  ]
})
