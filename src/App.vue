<template>
  <div id="app">
    <Button />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
