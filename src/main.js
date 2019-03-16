// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './permission'
import config from './config/index'
import store from './store/index'
import net from './api/api'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.globalConfig = config
Vue.prototype.$store = store
Vue.prototype.$net = net

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
