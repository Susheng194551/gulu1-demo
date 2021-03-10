import Vue from 'vue'
import App from './App.vue'
import  Icon from  './icon'
import ButtonGroup from './button-group'
import Input from "./Input";

Vue.config.productionTip = false
Vue.component('g-icon',Icon)
Vue.component('Button-group',ButtonGroup)
Vue.component('g-input',Input)
new Vue({
  render: h => h(App),

}).$mount('#app')

