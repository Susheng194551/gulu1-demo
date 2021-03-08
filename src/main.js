import Vue from 'vue'
import App from './App.vue'
import  Icon from  './icon'

Vue.config.productionTip = false
Vue.component('g-icon',Icon)
new Vue({
  render: h => h(App),
}).$mount('#app')

