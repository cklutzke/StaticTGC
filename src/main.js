
/*
  This was originally a system-generated file. It loads the router and other
  system dependencies before App.vue loads.
*/

// Imports from node_modules. These must be added by the developer.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import InstantSearch from 'vue-instantsearch'
import Vue2Filters from 'vue2-filters'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'noty/lib/noty.css'
import 'noty/lib/themes/bootstrap-v4.css'

// Imports from other src files.
import App from './App.vue'
import router from './router'
import './tgc.css'

// TEMP: Ideally, we'd register only the specific components we're using from each library.
Vue.use(BootstrapVue);
Vue.use(InstantSearch);
Vue.use(Vue2Filters);

// Turns off a Vue system reminder of what to do if you're building for production.
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
