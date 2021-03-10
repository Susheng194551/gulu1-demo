<template>
  <div class="Button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"GULUButton-Group",
  mounted(){
    for(let node of this.$el.children){
      let name=node.nodeName.toLowerCase()
      if(name!=='button'){
        console.warn(`Button-group 的子元素应该是Button,但是你写的是${name}`)
      }
    }
  }
}
</script>
<style lang="scss">
.Button-group{
  display: inline-flex;
  vertical-align: middle;
  > .Button-group{
    border-radius: 0;
    &:not(:first-child){
    margin-left: -1px;}
  }
  &:first-child{
    border-top-left-radius:var(--border-radius) ;
    border-bottom-right-radius: var(--border-radius);
  }
  &hover{
    position: relative;
    z-index: 1;
  }
}
</style>