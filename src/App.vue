<template>
  <div id="app">
    <Button>按钮</Button>
    <Button icon="setting">按钮</Button>
    <Button icon="setting" icon-position="right">按钮</Button>
  </div>
</template>

<script>
import Button from './components/button'
export default {
  name: 'App',
  components:{
    Button
  }
}
</script>

<style lang="scss">
@import "../public/reset.css";
</style>
