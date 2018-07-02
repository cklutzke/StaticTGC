import Vue from 'vue'
import App from './App.vue'
import router from './router'

// const wing.base_uri = "https://www.thegamecrafter.com";
// const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
  // data: {
  //   session: wing.object({
  //     with_credentials: false,
  //     create_api: "/api/session",
  //     on_create: function(properties) {
  //         localStorage.setItem("tgc_session_id", properties.id);
  //     },
  //     on_delete: function(properties) {
  //         localStorage.removeItem("tgc_session_id");
  //     },
  //     fetch_api: "/api/session/" + localStorage.getItem("tgc_session_id"),
  //     params: {
  //         _include_related_objects: ["user"],
  //         api_key_id: StaticTGC_api_key_id
  //     }
  //   })
  // },
  // mounted() {
  //   if (localStorage.getItem("tgc_session_id")) {
  //       this.session.fetch();
  //   }
  // }
}).$mount('#app')
