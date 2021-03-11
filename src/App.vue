<template>
  <div id="app">
    <div style="border: 1px solid black">
    <g-row gutter="20">
      <g-col :span="2" :phone="{span:24}"
      :ipad="{span:8}"
      :narrow-pc="{span:4}"
      :pc="{span:2}"
      :wide-pc="{span:1}">1</g-col>
      <g-col :span="22" :phone="{span:24}"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span:22}"
             :wide-pc="{span:23}">2</g-col>
    </g-row>
    <g-row gutter="20">
      <g-col :span="4">1</g-col>
      <g-col :span="20">2</g-col>
    </g-row>
    <g-row gutter="20">
      <g-col :span="4">1</g-col>
      <g-col :span="18" offset="2" >2</g-col>
    </g-row>

    <g-row gutter="20">
      <g-col :span="4">1</g-col>
      <g-col :span="8" offset="2" >2</g-col>
      <g-col :span="8" offset="2" >3</g-col>
    </g-row>
      </div>
    <hr>
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
  </div>
  </div>
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
