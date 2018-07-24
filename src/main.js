
// Imports from node_modules
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import InstantSearch from 'vue-instantsearch'
import Vue2Filters from 'vue2-filters'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'noty/lib/noty.css'
import 'noty/lib/themes/bootstrap-v4.css'

// Imports from src
import App from './App.vue'
import router from './router'
import './tgc.css'

// TEMP: Ideally, we'd register only the specific components we're using from each library.
Vue.use(BootstrapVue);
Vue.use(InstantSearch);
Vue.use(Vue2Filters);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
