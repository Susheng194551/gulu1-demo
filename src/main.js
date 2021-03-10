import Vue from 'vue'
import App from './App.vue'
import  Icon from  './icon'
import ButtonGroup from './button-group'
import Input from "./Input";
import Row from "./row"
import Col from './col'

Vue.config.productionTip = false
Vue.component('g-icon',Icon)
Vue.component('Button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
new Vue({
  render: h => h(App),

}).$mount('#app')

