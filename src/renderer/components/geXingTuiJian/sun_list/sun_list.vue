<template>
  <div class="sun_list">
    <div class="title">
      <h3 class="block" style="cursor: pointer;" v-on:click="to_list('/sun_list')">推荐歌单</h3>
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
  methods: {
    /* 跳转 */
    to_list(path) {
      this.$router.push(path);
    }
  },
  props: ["sun_list", "method", "is_can_play"]
};
</script>
