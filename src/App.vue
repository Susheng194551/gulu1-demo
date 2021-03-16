<template>
  <div id="app" style="padding:100px;">
  <g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="标题一" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题二" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题三" name="3">内容3</g-collapse-item>
  </g-collapse>
    {{selectedTab}}
<!--    <g-popover position="bottom">-->
<!--      <template slot="content">-->
<!--        <div>popover内容popover内容</div>-->
<!--      </template>-->
<!--        <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover>-->
<!--      <template slot="content">-->
<!--        <div>ssssssssssssssssssssssssssssssssssssssssssss</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover position="left">-->
<!--      <template slot="content">-->
<!--        <div>popover内容popover内容</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover position="right">-->
<!--      <template slot="content">-->
<!--        <div>popover内容popover内容</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover position="bottom" trigger="hover">-->
<!--      <template slot="content">-->
<!--        <div>popover内容popover内容</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover trigger="hover">-->
<!--      <template slot="content">-->
<!--        <div>ssssssssssssssssssssssssssssssssssssssssssss</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover position="left" trigger="hover">-->
<!--      <template slot="content">-->
<!--        <div>popover内容popover内容</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-popover position="right" trigger="hover">-->
<!--      <template slot="content">-->
<!--        <div>popover内容popover内容</div>-->
<!--      </template>-->
<!--      <Button>点我</Button>-->
<!--    </g-popover>-->
<!--    <g-tabs :selected.sync="selectedTab" @update:selected="yyy">-->
<!--      <g-tabs-head>-->
<!--        <template slot="actions">-->
<!--          <button>设置</button>-->
<!--        </template>-->
<!--        <g-tabs-item name="woman"><g-icon name="setting"></g-icon>美女</g-tabs-item>-->
<!--        <g-tabs-item name="finance" disabled>财经</g-tabs-item>-->
<!--        <g-tabs-item name="sports">体育</g-tabs-item>-->
<!--      </g-tabs-head>-->
<!--      <g-tabs-body>-->
<!--        <g-tabs-pane name="woman">美女相关</g-tabs-pane>-->
<!--        <g-tabs-pane name="finance">财经相关</g-tabs-pane>-->
<!--        <g-tabs-pane name="sports">体育相关</g-tabs-pane>-->
<!--      </g-tabs-body>-->
<!--    </g-tabs>-->
<!--    <button @click="showToast1">出来吧! 狗屎郑爽</button>-->
<!--    <button @click="showToast2">出来吧！吃屎郑爽</button>-->
<!--    <button @click="showToast3">出来吧！垃圾郑爽</button>-->
<!--    <g-layout style="height: 100vh">-->
<!--      <g-sider >sider</g-sider>-->
<!--      <g-layout>-->
<!--        <g-header >header</g-header>-->
<!--        <g-content >content</g-content>-->
<!--        <g-footer >footer</g-footer>-->
<!--      </g-layout>-->
<!--    </g-layout>-->
<!--    <g-row>-->
<!--      <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
<!--        <div class="demo"></div>-->
<!--      </g-col>-->
<!--      <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
<!--        <div class="demo"></div>-->
<!--      </g-col>-->
<!--      <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
<!--        <div class="demo"></div>-->
<!--      </g-col>-->
<!--      <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
<!--        <div class="demo"></div>-->
<!--      </g-col>-->
<!--      <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
<!--        <div class="demo"></div>-->
<!--      </g-col>-->
<!--      <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">-->
<!--        <div class="demo"></div>-->
<!--      </g-col>-->
<!--    </g-row>-->
<!--    <div style="border: 1px solid black">-->
<!--    <g-row gutter="20">-->
<!--      <g-col :span="24"-->
<!--      :ipad="{span:8}"-->
<!--      :narrow-pc="{span:4}"-->
<!--      :pc="{span:2}"-->
<!--      :wide-pc="{span:1}">1</g-col>-->
<!--      <g-col :span="24"-->
<!--             :ipad="{span:16}"-->
<!--             :narrow-pc="{span:20}"-->
<!--             :pc="{span:22}"-->
<!--             :wide-pc="{span:23}">2</g-col>-->
<!--    </g-row>-->
<!--    <g-row gutter="20">-->
<!--      <g-col :span="4">1</g-col>-->
<!--      <g-col :span="20">2</g-col>-->
<!--    </g-row>-->
<!--    <g-row gutter="20">-->
<!--      <g-col :span="4">1</g-col>-->
<!--      <g-col :span="18" offset="2" >2</g-col>-->
<!--    </g-row>-->

<!--    <g-row gutter="20">-->
<!--      <g-col :span="4">1</g-col>-->
<!--      <g-col :span="8" offset="2" >2</g-col>-->
<!--      <g-col :span="8" offset="2" >3</g-col>-->
<!--    </g-row>-->
<!--      </div>-->
<!--    <hr>-->
<!--    <div class="box">-->
<!--    <g-input value="张三" disable></g-input>-->
<!--    <g-input value="李四" readonly></g-input>-->
<!--    <g-input value="王五"></g-input>-->
<!--    </div>-->
<!--    <div class="box">-->
<!--      <g-input value="刘" @change="inputChange"></g-input>-->
<!--    </div>-->
<!--    <div class="box">-->
<!--      <g-input  v-model="message"></g-input>-->
<!--      <p>{{message}}</p>-->
<!--      <button @click="message+=1">+1</button>-->
<!--    </div>-->
<!--    <div class="box">-->
<!--    <g-input value="刘" error="姓名不能少于两个字"></g-input>-->
<!--    </div>-->
<!--      <div style="margin: 20px">-->
<!--        <div class="box">-->
<!--    <Button :loading="loading1" @click="loading1=!loading1">按钮</Button>-->
<!--    <Button icon="setting" :loading="loading2" @click="loading2=!loading2">按钮</Button>-->
<!--    <Button icon="setting" icon-position="right" :loading="loading3" @click="loading3=!loading3">按钮</Button>-->
<!--    <Button-group>-->
<!--      <Button icon="left">上一页</Button>-->
<!--      <Button>更多</Button>-->
<!--    <Button icon="right" icon-position="right">下一页</Button>-->
<!--    </Button-group>-->
<!--        </div>-->
<!--  </div>-->
  </div>
</template>

<script>
 // import Button from './components/button'

export default {
  name: 'App',
  data:()=>{
    return{
      selectedTab:['2','1']
      // loading1: false,
      // loading2:true,
      // loading3:false,
      // message:'hi'
    }
  },
  created() {

  },

  methods: {
    yyy(data){
      console.log('yyy')
      console.log(data)
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`世界上谁最傻逼 ${parseInt(Math.random() * 100)}。'郑爽是傻逼'`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '确实',
          callback() {
            console.log('经过证实郑爽确实是傻逼')
          }
        },
        autoClose: false,
      })
    }
  },
  // components:{
  //   Button
  // },
}

  // methods:{
  //   inputChange(e){
  //     console.log(e.target.value)
  //   }
  // }


</script>

<style lang="scss" scoped>
@import "../public/reset.css";
.demo{
  border: 1px solid #666;
  min-height: 100px;
}
.sider{background: #333;width: 150px}
.slide.slide-enter, .slide.slide-leave-to{
  margin-left: -150px;
}
.Header{
  background: #999;
  height: 100px;
}
.Footer{background: #ccc;
height: 50px}
</style>
