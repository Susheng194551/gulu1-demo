<template>
  <svg class="g-icon"><use :xlink:href="`#i${name}`" ></use></svg>
</template>
<script>
import  './svg'
export  default {
  name:'GULUIcon',
  props:{
    name: {
      type: String
    }
  },

}
</script>
<style lang="scss">
.g-icon{width: 1em;height: 1em}
</style>