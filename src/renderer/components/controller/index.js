import jingping from "../jingping/jinping.vue";
import music_list_all from "../music_list_all/music_list_all";
export default {
  components: { jingping, music_list_all },
  name: "index",
  data() {
    return {
      jingping_info: {},
      list_all: {}
    };
  },
  methods: {},
  async created() {
    try {
      //list
      let list = await this.$http("http://localhost:3000/playlist/catlist");
      let { data } = list;
      let ul_li = [];

      for (let i = 0; i < 10; i++) {
        ul_li.push(data.sub[i].name);
      }
      this.list_all = { ul_li };
      //精品info
      let res = await this.$http(
        "http://localhost:3000/top/playlist/highquality?limit=1"
      );
      let { playlists } = res.data;
      playlists.forEach(ele => {
        let { name, copywriter } = ele;
        this.jingping_info = { name, copywriter };
      });

      // sune_list
      let sun_list = await this.$http(
        "http://localhost:3000/top/playlist?limit=10&order=new"
      );
      let sun_lists = sun_list.data.playlists;
      // console.log(sun_lists);
    } catch (error) {
      alert("网络连接失败，请稍后重试");
    }
  }
};
