<template>
  <div id="app">
    <Button :loading="loading1" @click="loading1=!loading1">按钮</Button>
    <Button icon="setting" :loading="loading2" @click="loading2=!loading2">按钮</Button>
    <Button icon="setting" icon-position="right" :loading="loading3" @click="loading3=!loading3">按钮</Button>
    <Button-group>
      <Button icon="left">上一页</Button>
      <Button>更多</Button>
    <Button icon="right" icon-position="right">下一页</Button>
    </Button-group>
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
      loading3:false
    }
  },
  components:{
    Button
  },

}
</script>

<style lang="scss">
@import "../public/reset.css";
</style>
