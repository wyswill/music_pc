<template>
  <div class="geXingTuiJian">
    <carrousel :banner="banner"></carrousel>
    <sunlist :sun_list="sun_list" :is_can_play="is_can_play"></sunlist>
    <dujia :dujia_Data="dujia_Data"></dujia>
    <newMusic :newMusic="newMusic"></newMusic>
    <mvs :mv="mv"></mvs>
    <zhubo :zhubo_info="zhubo_info"></zhubo>
    <buttom></buttom>
  </div>
</template>

<script>
import bus from "../../util/bus.js";
export default {
  components: {
    carrousel: require("./banner/lb.vue").default,
    sunlist: require("./sun_list/sun_list.vue").default,
    dujia: require("./sun_list/dujia.vue").default,
    newMusic: require("./sun_list/newMusic.vue").default,
    mvs: require("./sun_list/tuiJianMv.vue").default,
    zhubo: require("./sun_list//zhubo.vue").default,
    buttom: require("./sun_list//buttom.vue").default
  },
  data() {
    return {
      banner: [],
      sun_list: [],
      dujia_Data: [],
      newMusic: [],
      mv: [],
      zhubo_info: [],
      is_can_play: false
    };
  },
  methods: {
    /* 得到banner数据 */
    async getBannerData() {
      let bannerData = await this.$http("http://localhost:3000/banner");
      let { banners } = bannerData.data;
      let banner_img_src = [];
      banners.map(ele => {
        let { imageUrl, targetId, typeTitle, url } = ele;
        banner_img_src.push({ imageUrl, targetId, typeTitle, url });
      });
      return banner_img_src;
    },
    /* 得到歌曲list数据 */
    async getSunListData() {
      let res = await this.$http("http://localhost:3000/personalized?limit=10");
      let { result } = res.data;
      result.forEach(async ele => {
        let { id } = ele;
        let res = await this.api.is_can_play_fuc(id);
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
        let res = await this.api.is_can_play_fuc(url);
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
    /* 得主播电台 */
    async get_zhuBoDianTai() {
      let url = "http://localhost:3000/personalized/djprogram";
      let res = await this.$http(url);
      let { result } = res.data;
      let zhubo_info = [];
      result.map(ele => {
        let {
          name,
          copywriter,
          picUrl,
          program,
          program: {
            radio: { id }
          }
        } = ele;
        zhubo_info.push({ id, name, copywriter, picUrl, program });
      });
      return zhubo_info;
    }
  },
  async mounted() {
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
    // 获取主播信息
    this.zhubo_info = await this.get_zhuBoDianTai();
  }
};
</script>
<style>
@import url("./style/style");
</style>
