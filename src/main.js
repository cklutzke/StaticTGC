import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import InstantSearch from 'vue-instantsearch'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import 'noty/lib/noty.css'
import 'noty/lib/themes/bootstrap-v4.css'

Vue.use(BootstrapVue);
Vue.use(InstantSearch);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
