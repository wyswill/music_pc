<template>
  <div>
    <!-- 精品 -->
    <jingping></jingping>
    <!-- 全部音乐 -->
    <music_list_all :lists="list_all"></music_list_all>
    <list :data="jingping_info"></list>
  </div>
</template>
<script >
import jingping from "./jingping/jinping.vue";
import music_list_all from "./music_play/music_list_all/music_list_all.vue";
import list from "./music_play/music_list_all/list.vue";
export default {
  components: { jingping, music_list_all, list },
  name: "index",
  data() {
    return {
      jingping_info: [],
      list_all: { get_item: this.get_item }
    };
  },
  methods: {
    async get_item(ids) {
      let url = `http://localhost:3000/top/playlist/highquality?limit=12&cat=${ids}`;
      let res = await this.$http(url);
      let { playlists, lasttime } = res.data;
      let r = {},
        t = [];
      playlists.forEach(ele => {
        let { coverImgUrl, name, copywriter, id } = ele;
        r = { coverImgUrl, name, copywriter, id };
        t.push(r);
      });
      this.before = lasttime;
      this.jingping_info = t;
    }
  },
  created() {
    this.get_item(" ");
  }
};
</script>
