<template>
  <div>
    <div class="zhanwei"></div>
    <muse></muse>
    <div class="fixed_div">
      <bar></bar>
    </div>
    <div class="zhanwei"></div>
    <div class="fixed_bottom">
      <BottomNavigation></BottomNavigation>
    </div>
  </div>
</template>
<script>
  import Muse from './Muse.vue'
  import bar from './Bar.vue'
  import BottomNavigation from './BottomNavigation.vue'
  export default {
    components: {
      Muse,
      bar,
      BottomNavigation
    }
  }
</script>
<style type="text/css">
  .fixed_div{
    position:fixed;
    width:100%;
    top: 0px;
  }
</style>
<style type="text/css">
  .fixed_bottom{
    position:fixed;
    width:100%;
    bottom: 0px;
  }
</style>
<style type="text/css">
  .zhanwei{
    height:64px;
    width: 100%;
  }
</style>


