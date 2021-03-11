<template>
<div class="row" :style="rowStyle"
>
  <slot></slot>
</div>
</template>
<script>
export default {
  name:'GULURow',
  props:{
    gutter:{
      type:[Number,String]
    }
  },
  computed:{
    rowStyle(){
        let {gutter}=this
        return{
        marginLeft:-gutter/2+'px',
        marginRight:-gutter/2+'px'
      }
  }
  },
  mounted() {
    this.$children.forEach((vm)=>{
      vm.gutter=this.gutter
    })
  }
}

</script>
<style scoped lang="scss">
.row{
  display: flex;
}
</style>
<!--var div=document.createElement('div')//created 内存里生成对象-->
<!--document.body.appendChild(div)//mounted 把这个对象挂在页面去   两个区别created创建这个对象
并没有放在页面里 mounted把这个对象挂在页面去

-->