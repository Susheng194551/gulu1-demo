<template>
  <div class="Button-group">
    <slot></slot>
  </div>
</template>

<script></script>
<style lang="scss">
.Button-group{
  display: inline-flex;
  vertical-align: middle;
  > .Button-group{
    border-radius: 0;
    margin-left: -1px;
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