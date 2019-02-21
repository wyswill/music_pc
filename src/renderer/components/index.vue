<template>
  <div>
    <!-- 精品 -->
    <jingping :info="jingping_info"></jingping>
    <!-- 全部音乐 -->
    <music_list_all :list_all="list_all"></music_list_all>
  </div>
</template>

<script src='./controller/index.js'></script>
<style>
@import url("../assets/css/index.css");
</style>
