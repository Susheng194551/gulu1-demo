(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{298:function(t,e,n){"use strict";function i(t,e,n,i,a,o,s,l){var c,r="function"==typeof t?t.options:t;if(e&&(r.render=e,r.staticRenderFns=n,r._compiled=!0),i&&(r.functional=!0),o&&(r._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},r._ssrRegister=c):a&&(c=l?function(){a.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(r.functional){r._injectStyles=c;var u=r.render;r.render=function(t,e){return c.call(e),u(t,e)}}else{var d=r.beforeCreate;r.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:r}}n.d(e,"a",(function(){return i}))},333:function(t,e,n){},334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},376:function(t,e,n){"use strict";n(333)},377:function(t,e,n){"use strict";n(334)},378:function(t,e,n){"use strict";n(335)},379:function(t,e,n){"use strict";n(336)},380:function(t,e,n){"use strict";n(337)},395:function(t,e,n){"use strict";n.r(e);n(91),n(65);var i={data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GULUSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},a=(n(376),n(298)),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"37635406",null).exports,s={name:"GULUheader"},l=(n(377),Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Header"},[this._t("default")],2)}),[],!1,null,"3026c4c1",null).exports),c={name:"GULUfooter"},r=(n(378),Object(a.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Footer"},[this._t("default")],2)}),[],!1,null,"987609c6",null).exports),u={name:"GULUcontent"},d=(n(379),Object(a.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Content"},[this._t("default")],2)}),[],!1,null,"e8cbb638",null).exports),h={name:"GULUSider",data:function(){return{visible:!0}},methods:{}},f=(n(380),{name:"layout-demos",components:{"a-layout":o,"a-header":l,"a-footer":r,"a-content":d,"a-sider":Object(a.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"9b112338",null).exports}}),_=Object(a.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[t._v("默认布局")]),t._v(" "),n("a-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("a-header",{staticStyle:{height:"50px",background:"lightskyblue"}}),t._v(" "),n("a-content",{staticStyle:{height:"100px",background:"deepskyblue"}}),t._v(" "),n("a-footer",{staticStyle:{height:"50px",background:"lightskyblue"}})],1)],1),t._v(" "),n("div",[n("div",[t._v("带有侧边栏布局")]),t._v(" "),n("a-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("a-header",{staticStyle:{height:"50px",background:"lightskyblue"}}),t._v(" "),n("a-layout",[n("a-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}}),t._v(" "),n("a-content",{staticStyle:{height:"100px",background:"deepskyblue"}})],1),t._v(" "),n("a-footer",{staticStyle:{height:"50px",background:"lightskyblue"}})],1),t._v(" "),n("div",[t._v("侧边栏靠右")]),t._v(" "),n("a-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("a-header",{staticStyle:{height:"50px",background:"lightskyblue"}}),t._v(" "),n("a-layout",[n("a-content",{staticStyle:{height:"100px",background:"deepskyblue"}}),t._v(" "),n("a-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}})],1),t._v(" "),n("a-footer",{staticStyle:{height:"50px",background:"lightskyblue"}})],1),t._v(" "),n("div",[t._v("左右布局")]),t._v(" "),n("a-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("a-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}}),t._v(" "),n("a-layout",[n("a-header",{staticStyle:{height:"50px",background:"lightskyblue"}}),t._v(" "),n("a-content",{staticStyle:{height:"100px",background:"deepskyblue"}}),t._v(" "),n("a-footer",{staticStyle:{height:"50px",background:"lightskyblue"}})],1)],1)],1)])}),[],!1,null,null,null);e.default=_.exports}}]);