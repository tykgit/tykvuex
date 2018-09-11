// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuexStore from './store'

Vue.prototype.axios = axios
// import '../src/css/lib/layui.css'
// import '../src/js/lib/css/modules/layer/default/layer.css'
// import '../src/js/lib/css/modules/laydate/default/laydate.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuexStore,
  components: { App },
  template: '<App/>'
})
