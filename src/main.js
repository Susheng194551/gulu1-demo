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
import Toast  from  './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import TabsBody from './tabs-body'
import Popover from './popover'


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
Vue.component('g-toast',Toast)
Vue.use(plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-popover',Popover)

new Vue({
  render: h => h(App),

}).$mount('#app')

