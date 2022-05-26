import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuetify);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')

