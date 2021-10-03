import Vue from 'vue'
import App from './App.vue'
// 挂载路由
import router from './router'

// 产品构建时的提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
