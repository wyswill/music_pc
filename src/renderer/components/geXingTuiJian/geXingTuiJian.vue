<template>
  <div class="geXingTuiJian">
    <carrousel :banner="banner"></carrousel>
    <sunlist :sun_list="sun_list" :is_can_play="is_can_play" :method="utils"></sunlist>
    <dujia :dujia_Data="dujia_Data" :method="utils"></dujia>
    <newMusic :newMusic="newMusic" :method="utils"></newMusic>
    <mvs :mv="mv" :method="utils"></mvs>
  </div>
</template>

<script>
export default {
  components: {
    carrousel: require("./banner/lb.vue").default,
    sunlist: require("./sun_list/sun_list.vue").default,
    dujia: require("./sun_list/dujia.vue").default,
    newMusic: require("./sun_list/newMusic.vue").default,
    mvs: require("./sun_list/tuiJianMv.vue").default
  },
  data() {
    return {
      banner: [],
      sun_list: [],
      dujia_Data: [],
      newMusic: [],
      mv: [],
      utils: {
        is_can_play_fuc: this.is_can_play_fuc,
        sun_can_play: this.sun_can_play,
        get_sun_info: this.get_sun_info,
        get_mv_data: this.get_mv_data,
        get_mv_url: this.get_mv_url
      },
      is_can_play: false
    };
  },
  methods: {
    /* 得到banner数据 */
    async getBannerData() {
      let bannerData = await this.$http("http://localhost:3000/banner");
      let { banners } = bannerData.data;
      let banner_img_src = [];
      banners.forEach(ele => {
        let { imageUrl, targetId } = ele;
        banner_img_src.push({ imageUrl, targetId });
      });
      return banner_img_src;
    },
    /* 得到歌曲list数据 */
    async getSunListData() {
      let res = await this.$http("http://localhost:3000/personalized?limit=10");
      let { result } = res.data;
      result.forEach(async ele => {
        let { id } = ele;
        let res = await this.is_can_play_fuc(id);
        if (res) this.is_can_play = true;
      });
      return result;
    },
    /* 得到独家信息 */
    async getDujia() {
      let res = await this.$http(
        "http://localhost:3000/personalized/privatecontent"
      );
      res.data.result.forEach(async ele => {
        let { url } = ele;
        let res = await this.is_can_play_fuc(url);
      });

      return res.data.result;
    },
    /* 得到最新音乐信息 */
    async getNewMusic() {
      let res = await this.$http("http://localhost:3000/personalized/newsong");
      let list = [];
      res.data.result.forEach(async ele => {
        let {
          id,
          song: {
            name: songeName,
            album: { blurPicUrl },
            artists,
            mvid
          }
        } = ele;
        let tempStr = "";
        artists.forEach(ele => {
          let { name } = ele;
          tempStr += "/" + name;
        });
        let end = tempStr.length - 1;
        artists = tempStr.slice(1, end);
        list.push({ id, songeName, blurPicUrl, artists, mvid });
      });
      return list;
    } /* 得到推荐mv信息 */,
    async get_mv_info() {
      let res = await this.$http("http://localhost:3000/personalized/mv");
      let { result } = res.data;
      return result;
    },
    /* 获取歌单是否可用 */
    async is_can_play_fuc(id) {
      let url = `http://localhost:3000/playlist/detail?id=${id}`;
      let result = await this.$http(url);
      return result.data;
    },
    /* 音乐是否可用播放 */
    async sun_can_play(id) {
      let url = `http://localhost:3000/check/music?id${id}`;
      let res = await this.$http(url);
      return res.data;
    },
    /* 得到歌曲信息 */
    async get_sun_info(id) {
      let url = `http://localhost:3000/song/url?id${id}`;
      let res = await this.$http(url);
      return res.data;
    },
    /* 得到mv数据 */
    async get_mv_data(id) {
      let res = await this.$http(`http://localhost:3000/mv/detail?mvid=${id}`);
      return res.data;
    },
    /* 获取mv地址 */
    async get_mv_url(id) {
      let res = await this.$http(`http://localhost:3000/mv/url?id=${id}`);
      return res.data;
    }
  },
  async created() {
    // 获取banner数据
    this.banner = await this.getBannerData();
    //获取歌曲列表数据
    this.sun_list = await this.getSunListData();
    //独家放送
    this.dujia_Data = await this.getDujia();
    //获取最新音乐
    this.newMusic = await this.getNewMusic();
    // 获取mv
    this.mv = await this.get_mv_info();
  }
};
</script>
<style>
@import url("./css/styles.css");
</style>
