import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import notice from './components/Notice/index.js'
Vue.prototype.$notice = notice
new Vue({
  render: h => h(App),
}).$mount('#app')
