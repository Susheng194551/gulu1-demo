<template>
  <div class="tabs-item" @click="xx" :class="classes"><slot></slot></div>
</template>

<script>
export default {
  name: "GULUTabsItem",
  inject:['eventBus'],
  data(){//不需要用户传值 自身维护值
    return{
      active:false
    }
  },
  props:{//需要用户 （前端开发者）传值
    // active:{
    //   type:Boolean,
    //   default:false
    // },
    disabled:{
      type:Boolean,
      default:false
    },
    // name:{
    //   type:String | Number,
    //   required:true
    // }
  },
  computed:{
    classes(){
      return{
        active:this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      this.active=name===this.name
    })

  },
  methods:{
    xx(){
    this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
    background: red;
  }
}
</style>