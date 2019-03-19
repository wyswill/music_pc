<template>
  <div class="music_play">
    <audio/>
    <div class="play_crol">
      <div class="l_info">
        <img :src="music_info.img" v-show="music_info.img" alt>
        <p>{{music_info.name}}</p>
        <p>{{music_info.author}}</p>
      </div>
      <div class="midle">
        <span id="begain_time">{{begain_time}}</span>
        <img src="../../assets/image/bofangqi-xiayiji.png" id="pre" alt>
        <img src="../../assets/image/bofangqi-bofang.png" v-if="!isPlay" @click="play" alt>
        <img src="../../assets/image/bofangqi-zanting.png" v-if="isPlay" @click="play" alt>
        <img src="../../assets/image/bofangqi-xiayiji.png" id="next" alt>
        <span id="tatal_time">{{tatal_time}}</span>
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
      isPlay: false,
      begain_time: "00:00",
      tatal_time: "00:00"
    };
  },
  methods: {
    async get_song_info(id) {
      let url = `http://localhost:3000/song/detail?ids=${id}`;
      let res = await this.$http(url);
      let { name, ar, al } = res.data.songs[0];
      this.music_info = { img: al.picUrl, name, author: ar[0].name };
    },
    play() {
      let audio = this.get_audio;
      if (audio.src) {
        if (audio.paused) {
          //暂停状态
          audio.play();
          this.isPlay = true;
        } else {
          // 播放状态
          audio.pause();
          this.isPlay = false;
        }
      }
    },
    /* 转换时间 */
    transTime(time) {
      let duration = parseInt(time);
      let minute = parseInt(duration / 60);
      let sec = (duration % 60) + "";
      let isM0 = ":";
      if (minute == 0) {
        minute = "00";
      } else if (minute < 10) {
        minute = "0" + minute;
      }
      if (sec.length == 1) {
        sec = "0" + sec;
      }
      return minute + isM0 + sec;
    },
    updateProgress() {
      let audio = this.get_audio; //js获取的方式
      let value = Math.round(
        (Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100,
        0
      );
      $(".pgs-play").css("width", value * 0.907 + "%");
      $(".played-time").html(transTime(audio.currentTime));
    }
  },
  computed: {
    get_audio() {
      return document.querySelector("audio");
    }
  },
  mounted() {
    let audio = this.get_audio;
    bus.$on("music_info", data => {
      let info = JSON.parse(data);
      audio.src = info.url;
      audio.play();
      this.isPlay = true;
      this.get_song_info(info.id);
    });
    let _this = this;
    audio.addEventListener("loadedmetadata", function() {
      _this.tatal_time = _this.transTime(this.duration);
    });
    audio.addEventListener("timeupdate", this.updateProgress, false);
  }
};
</script>
<style>
@import url("./style/style.css");
</style>
