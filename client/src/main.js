// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import bootstrapvue from 'bootstrap-vue'
import vuetify from 'vuetify'
import store from './store/store'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/es/components/modal/modal'
import 'bootstrap-vue/es/directives/modal/modal'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import admission from '@/components/admission'
import content from '@/components/content'

Vue.component('icon', Icon)
Vue.component('content', content)
Vue.component('admission', admission)

Vue.use(bootstrapvue)
Vue.use(vuetify)
Vue.use(Vuex)
sync(store, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
