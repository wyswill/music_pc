import axios from "axios";
import bus from "./bus";
export default {
  test() {
    console.log(axios);
  },
  /* 获取歌单是否可用 */
  async is_can_play_fuc(id) {
    let url = `http://localhost:3000/playlist/detail?id=${id}`;
    let result = await axios(url);
    return result.data;
  },
  /* 音乐是否可用播放 */
  async sun_can_play(id) {
    let url = `http://localhost:3000/check/music?id=${id}`;
    let res = await axios(url);
    return res.data;
  },
  /* 得到歌曲信息 */
  async get_sun_info(id) {
    let url = `http://localhost:3000/song/url?id=${id}`;
    let res = await axios(url);
    return res.data.data[0];
  },
  /* 得到mv数据 */
  async get_mv_data(id) {
    let res = await axios(`http://localhost:3000/mv/detail?mvid=${id}`);
    return res.data;
  },
  /* 获取mv地址 */
  async get_mv_url(id) {
    let res = await axios(`http://localhost:3000/mv/url?id=${id}`);
    return res.data;
  },
  /* 的到电台节目音频 */
  async getRedio(id) {
    let url = `http://localhost:3000/song/url?id=${id}`;
    let res = await axios(url);
    return res.data.data;
  },
  /* 跳转 */
  to_list(path, router, from = {}) {
    router.push({
      name: path,
      params: { from }
    });
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
  }
};
