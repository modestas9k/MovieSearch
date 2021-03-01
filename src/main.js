// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 425,
    tablet: 768,
    desktop: Infinity
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
