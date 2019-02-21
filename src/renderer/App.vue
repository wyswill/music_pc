<template>
  <div id="app">
    <div class="musice_list">
      <!-- nav -->
      <nav class="nav">
        <ul class="navBar">
          <li v-for="item in music_type_list" :key="item" v-on:click="is_active">{{ item }}</li>
        </ul>
        <input type="text" class="serach" placeholder="搜索">
        <span class="icon">
          <img src="./assets/image/search.png" alt>
        </span>
      </nav>
    </div>
    <router-view></router-view>
    <div style="height: 60px;
    margin-bottom: 60px;"></div>
    <musicPlay></musicPlay>
  </div>
</template>

<script src='./util/app.js'></script>

<style>
* {
  margin: 0;
  padding: 0;
}
.float_left {
  float: left;
}
.float_right {
  float: right;
}
.clear {
  overflow: hidden;
}
.block {
  display: inline-block;
}
.musice_list {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
}
.text_overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
