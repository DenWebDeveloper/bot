import Vue from 'vue'
import store from './store/'
import router from './router/'

import App from './App.vue'

import Vuetify from 'vuetify'
import './plugins/vuetify'

import http from './untils/http'
import bus from './untils/bus'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.prototype.$bus = bus

const vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

window.vm = vm
