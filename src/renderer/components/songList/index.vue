<template>
<div class="info">
  <div class="waper">
    <heads :temp="temp"></heads>
  </div>
  <div class="list">
    <h2>歌曲列表</h2>
    <table rules="rows">
      <tr>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
      </tr>
      <tr v-for="(ele,index) in list" :key="index">
        <td @click="playe(ele.id)">{{ele.title}}</td>
        <td>{{ele.songer}}</td>
        <td>《{{ele.zhuanji}}》</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
import bus from "../../util/bus.js";
import heads from "./head";
export default {
  components: { heads },
  data() {
    return {
      temp: {},
      list: []
    };
  },
  methods: {
    async playe(id) {
      await this.play(id);
    },
    /* 获取歌单是否可用 */
    async is_can_play_fuc(id) {
      let url = `http://localhost:3000/playlist/detail?id=${id}`;
      let result = await this.$http(url);
      return result.data;
    },
    /* play music */
    async play(targetId) {
      let res = await this.get_sun_info(targetId);
      if (res.url == null) {
        alert("没有该歌曲的版权哦！");
        return;
      }
      let { url, id } = res;
      let msg = JSON.stringify({ url, id });
      bus.$emit("music_info", msg);
    },
    /* 得到歌曲信息 */
    async get_sun_info(id) {
      let url = `http://localhost:3000/song/url?id=${id}`;
      let res = await this.$http(url);
      return res.data.data[0];
    }
  },
  async mounted() {
    let { params } = this.$route;
    let id = params.from.id;
    let res = await this.is_can_play_fuc(id);
    let {
      coverImgUrl,
      name,
      creator: { avatarUrl, nickname },
      createTime,
      tags,
      trackCount,
      playCount,
      description,
      tracks
    } = res.playlist;
    let t = new Date(createTime);
    createTime = `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`;
    this.temp = {
      coverImgUrl,
      name,
      avatarUrl,
      nickname,
      createTime,
      tags: tags.join("/"),
      trackCount,
      playCount,
      description
    };
    let tm = [];
    tracks.map(ele => {
      let { name, ar, al, id } = ele;
      tm.push({
        title: name,
        songer: ar[0].name,
        zhuanji: al.name,
        id
      });
    });
    this.list = tm;
  }
};
</script>

<style>
@import url("./style/index.css");
</style>
