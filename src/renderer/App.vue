<template>
  <div id="app">
    <div class="left">
      <div class="header">
        <img src="./assets/image/user.png" alt>
        <p>{{statu}}</p>
      </div>
    </div>

    <div class="right">
      <div class="musice_list">
        <!-- nav -->
        <nav class="nav">
          <ul class="navBar">
            <li
              v-for="(item,index) in music_type_list"
              :key="index"
              v-on:click="is_active"
            >{{ item }}</li>
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
  </div>
</template>
<script src='./util/app.js'></script>
<style>
@import url("./style/insex.css");
</style>
