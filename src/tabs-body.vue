<template>
  <div class="tabs-body"><slot></slot></div>
</template>

<script>
export default {
  name: "GULUTabsBody",
  inject:['eventBus'],
  created() {

  }
}
</script>

<style scoped lang="scss">
.tabs-body{

}
</style>