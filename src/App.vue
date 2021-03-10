<template>
  <div id="app">
    <div class="box">
    <g-input value="张三" disable></g-input>
    <g-input value="李四" readonly></g-input>
    <g-input value="王五"></g-input>
    </div>
    <div class="box">
      <g-input value="刘" @change="inputChange"></g-input>
    </div>
    <div class="box">
      <g-input  v-model="message"></g-input>
      <p>{{message}}</p>
      <button @click="message+=1">+1</button>
    </div>
    <div class="box">
    <g-input value="刘" error="姓名不能少于两个字"></g-input>
    </div>
      <div style="margin: 20px">
        <div class="box">
    <Button :loading="loading1" @click="loading1=!loading1">按钮</Button>
    <Button icon="setting" :loading="loading2" @click="loading2=!loading2">按钮</Button>
    <Button icon="setting" icon-position="right" :loading="loading3" @click="loading3=!loading3">按钮</Button>
    <Button-group>
      <Button icon="left">上一页</Button>
      <Button>更多</Button>
    <Button icon="right" icon-position="right">下一页</Button>
    </Button-group>
        </div>
  </div></div>
</template>

<script>

import Button from './components/button'

export default {
  name: 'App',
  data:()=>{
    return{
      loading1: false,
      loading2:true,
      loading3:false,
      message:'hi'
    }
  },
  components:{
    Button
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  }

}
</script>

<style lang="scss">
@import "../public/reset.css";
</style>
