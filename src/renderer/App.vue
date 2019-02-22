<template>
  <div id="app">
    <div class="musice_list">
      <!-- nav -->
      <nav class="nav">
        <ul class="navBar">
          <li v-for="(item,index) in music_type_list" :key="index" v-on:click="is_active">{{ item }}</li>
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
  width: 100%;
  z-index: 999;
  background: #fff;
}
.text_overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cursor:hover {
  cursor: pointer;
}
.navBar li:nth-child(7) {
  background: url("./assets/image/back.png") no-repeat;
}
.navBar li:last-child {
  margin: 0;
  background: url("./assets/image/forword.png") no-repeat;
}
.navBar li:nth-child(7),
.navBar li:last-child {
  width: 20px;
  background-size: 20px;
  background-position-y: -3px;
  color: #fff;
  font-size: 1px;
  line-height: 20px;
}
.navBar li:nth-child(7):hover,
.navBar li:last-child:hover {
  cursor: pointer;
}
</style>
