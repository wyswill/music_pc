<template>
  <div class="sun_list">
    <div class="title">
      <router-link to="sun_list">
        <h3 class="block" style="cursor: pointer;">推荐歌单</h3>
      </router-link>
    </div>
    <div class="list">
      <ul>
        <li class="block" v-for="(item,index) in sun_list" :key="index">
          <img :src="item.picUrl" alt>
          <div class="names">{{item.name}}</div>
          <div class="play" v-if="is_can_play">
            <img src="../../../assets/image/play.png" alt>
          </div>
          <div class="mv" v-if="item.mvid">
            <img src alt>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["sun_list", "method", "is_can_play"]
};
</script>
