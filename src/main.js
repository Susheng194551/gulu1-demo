import Vue from 'vue'
import App from './App.vue'
import  Icon from  './icon'
import ButtonGroup from './button-group'
import Input from "./Input";
import Row from "./row.vue"
import Col from './col.vue'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Layout from './layout'
import Sider from './sider'

Vue.config.productionTip = false
Vue.component('g-icon',Icon)
Vue.component('Button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-header',Header)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)

new Vue({
  render: h => h(App),

}).$mount('#app')

