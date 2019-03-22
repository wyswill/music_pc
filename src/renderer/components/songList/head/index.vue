<template>
  <div class="htead">
    <img :src="temp.coverImgUrl" alt class="float_left">
    <div class="title_info">
      <span>歌单</span>
      <h2 class="clear">{{temp.name}}</h2>
      <div class="clear">
        <img :src="temp.avatarUrl" class="avatarUrl float_left" alt>
        <small style=" color: blue">{{temp.nickname}}</small>
        <small>{{temp.createTime}}创建</small>
      </div>
      <dl class="clear">
        <dt>标签:</dt>
        <dd style="top: 0">{{temp.tags}}</dd>
        <dt>歌曲数:</dt>
        <dd style="top:29%">{{temp.trackCount}}</dd>
        <dt>播放数:</dt>
        <dd style="top:55%">{{temp.playCount}}</dd>
        <dt>简介:</dt>
        <dd style="top:78%">{{temp.description}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ["temp"]
};
</script>

<style>
</style>
