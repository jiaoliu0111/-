import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './permission'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
