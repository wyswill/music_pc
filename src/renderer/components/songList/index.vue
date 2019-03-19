<template>
  <div class="info waper">
    <div class="htead">
      <img :src="this.temp.coverImgUrl" alt class="float_left">
      <div class="title_info">
        <span>歌单</span>
        <h2 class="clear">{{this.temp.name}}</h2>
        <div class="clear">
          <img :src="this.temp.avatarUrl" class="avatarUrl float_left" alt>
          <small style=" color: blue">{{this.temp.nickname}}</small>
          <small>{{this.temp.createTime}}创建</small>
        </div>
        <dl class="clear">
          <dt>标签:</dt>
          <dd style="top: 0">{{this.temp.tags}}</dd>
          <dt>歌曲数:</dt>
          <dd style="top:29%">{{this.temp.trackCount}}</dd>
          <dt>播放数:</dt>
          <dd style="top:55%">{{this.temp.playCount}}</dd>
          <dt>简介:</dt>
          <dd style="top:78%">{{this.temp.description}}</dd>
        </dl>
      </div>
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
export default {
  data() {
    return {
      temp: {},
      list: []
    };
  },
  methods: {
    async playe(id) {
      await this.utils.play(id);
    }
  },
  async mounted() {
    let { params } = this.$route;
    let id = params.from.id;
    this["utils"] = params.utils;
    let res = await this.utils.is_can_play_fuc(id);
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
