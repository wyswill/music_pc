<template>
  <div class="music_list_all">
    <div class="waper clear">
      <span class="float_left">全部歌单</span>
      <ul class="float_right block">
        <li v-for="item in list_all.ul_li" v-bind:key="item" class="block">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script src='../controller/music_list_all.js'>
</script>