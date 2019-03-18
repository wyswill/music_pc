<template>
  <div class="jinpin">
    <div class="waper">
      <div class="jingpin_bg">
        <img :src="this.jingping_info.coverImgUrl">
      </div>
      <div class="jingpin_info">
        <img :src="this.jingping_info.coverImgUrl" class="jingpin_bg_img float_left">
        <div class="info block">
          <p class="block">
            <span class="icon"></span>精品歌单
          </p>
          <h3>{{this.jingping_info.name}}</h3>
          <p style="color: #cccbcb;">{{this.jingping_info.copywriter}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script scope>
export default {
  data() {
    return {
      jingping_info: {}
    };
  },
  name: "jingping",
  async mounted() {
    //精品info
    let res = await this.$http(
      "http://localhost:3000/top/playlist/highquality?limit=1"
    );
    let { playlists } = res.data;
    playlists.forEach(ele => {
      let { coverImgUrl, name, copywriter } = ele;
      this.jingping_info = { coverImgUrl, name, copywriter };
    });
  }
};
</script>
<style >
@import url("./style/index.css");
</style>
