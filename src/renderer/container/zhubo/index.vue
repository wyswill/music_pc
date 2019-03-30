<template>
  <div class="zhubo">
    <div class="waper">
      <heads :temp="temp"></heads>
    </div>
    <songList :tableData="tableData"></songList>
  </div>
</template>

<script>
import heads from "../../components/songList/head";
import songList from "../song_info_list";
export default {
  components: { heads, songList },
  data() {
    return {
      temp: {},
      tableData: []
    };
  },
  async mounted() {
    let id_s = this.$route.params.from.id;
    let res = await this.api.getRedioinfo(id_s);
    let {
      id,
      picUrl,
      name,
      desc,
      dj: { avatarUrl, nickname, description },
      subCount,
      programCount,
      createTime,
      lastProgramCreateTime,
      rcmdText
    } = res;
    this.temp = {
      coverImgUrl: picUrl,
      name,
      avatarUrl,
      nickname,
      createTime,
      tags: rcmdText,
      trackCount: programCount,
      playCount: subCount,
      description
    };
    let songList = await this.api.getRedio(id);
    let t = [];
    songList.map(ele => {
      let {
        id,
        serialNum,
        coverUrl,
        description,
        listenerCount,
        likedCount,
        createTime
      } = ele;
      t.push({
        id,
        serialNum,
        coverUrl,
        description,
        listenerCount,
        likedCount,
        createTime
      });
    });
    console.log(t);

    this.temp = t;
  }
};
</script>

<style>
</style>
