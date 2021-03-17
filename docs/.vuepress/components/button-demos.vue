<template>
<div>
  <g-button>默认样式</g-button>
  <g-button icon="left">样式</g-button>
  <g-button :loading="loading2"  @click="loading2=!loading2">sss</g-button>
  <g-button icon="setting">sss</g-button>

  <pre><code>{{content}}</code></pre>
</div>
</template>

<script>
import Button from '../../../src/components/button'
export default {
  data(){
    return{
      content:`  <g-button>默认样式</g-button>
  <g-button icon="left">样式</g-button>
  <g-button :loading="loading2"  @click="loading2=!loading2">sss</g-button>
  <g-button icon="setting">sss</g-button>
  记得加个loading2：true的变量
`,
       loading2:true,
    }
  },
  components:{
    'g-button':Button,
  }
}
</script>

<style scoped>

</style>