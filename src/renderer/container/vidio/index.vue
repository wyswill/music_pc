<template>
  <div class="vidio">
    <div class="waper">
      <div class="left">
        <div class="vidio">
          <video ref="vidio" controls></video>
        </div>
        <div class="author">
          <img :src="mv_info.cover" alt>
          <span>{{mv_info.artists}}</span>
        </div>
        <div class="info">
          <h2>{{mv_info.name}}</h2>
          <span>发布:{{mv_info.publishTime}}</span>
          <span>播放:{{mv_info.playCount}}次</span>
        </div>
      </div>
      <div class="vidio_right">
        <div class="title">相关推荐</div>
        <div class="item" v-for="(ele ,index) in other" :key="index">
          <img :src="ele.coverUrl" alt>
          <span>{{ele.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vidio",
  data() {
    return {
      mv_info: {},
      other: []
    };
  },
  methods: {
    /* 获取mv地址 */
    async get_mv_url(id) {
      let res_url = await this.$http(`http://localhost:3000/mv/url?id=${id}`);
      let res_ditail = await this.$http(
        `http://localhost:3000/mv/detail?mvid=${id}`
      );
      let res_other = await this.$http(
        `http://localhost:3000/related/allvideo?id=${id}`
      );
      let t = [];
      t.push(res_url.data);
      t.push(res_ditail.data);
      t.push(res_other.data);
      return t;
    }
  },
  async mounted() {
    let { params } = this.$route;
    let id = params.from.id;
    /* 获取mv连接 */
    let res = await this.get_mv_url(id);
    let { url } = res[0].data;
    let video = this.$refs.vidio;
    video.src = url;
    /* 获取mv信息 */
    let {
      cover,
      name,
      artists,
      brs,
      publishTime,
      playCount,
      likeCount,
      subCount,
      shareCount
    } = res[1].data;
    let t = [];
    artists.map(ele => t.push(ele.name));
    this.mv_info = {
      cover,
      artists: t.join("/"),
      name,
      brs,
      publishTime,
      playCount,
      likeCount,
      subCount,
      shareCount
    };
    /* 获取其他信息 */
    let other = [];
    res[2].data.map(ele => {
      let {
        title,
        coverUrl,
        vid,
        creator: [{ userName }],
        playTime
      } = ele;
      other.push({ title, coverUrl, vid, userName, playTime });
    });
    this.other = other;
  }
};
</script>

<style>
@import url("./style/index.css");
</style>
