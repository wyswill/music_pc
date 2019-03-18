<template>
  <div class="music_play">
    <audio autoplay :src="audio_src"/>
    <div class="play_crol">
      <div class="l_info">
        <img :src="music_info.img" alt>
        <p>{{music_info.name}}</p>
        <p>{{music_info.author}}</p>
      </div>
      <div class="midle">
        <img src="../../assets/image/bofangqi-xiayiji.png" id="pre" alt>
        <img src="../../assets/image/bofangqi-bofang.png" v-if="!isPlay" id="play" alt>
        <img src="../../assets/image/bofangqi-zanting.png" v-if="isPlay" id="play" alt>
        <img src="../../assets/image/bofangqi-xiayiji.png" id="next" alt>
      </div>
      <div class="r_menew"></div>
    </div>
  </div>
</template>
<script>
import bus from "../../util/bus.js";
export default {
  data() {
    return {
      music_info: {},
      audio_id: 0,
      audio_src: "",
      isPlay: false
    };
  },
  methods: {
    async get_song_info(id) {
      let url = `http://localhost:3000/song/detail?ids=${id}`;
      let res = await this.$http(url);
      let { name, ar, al } = res.data.songs[0];
      this.music_info = { img: al.picUrl, name, author: ar[0].name };
    }
  },
  mounted() {
    bus.$on("music_info", data => {
      let info = JSON.parse(data);
      this.audio_src = info.url;
      this.isPlay = !this.isPlay;
      this.get_song_info(info.id);
    });
  }
};
</script>
<style>
@import url("./style/style.css");
</style>
