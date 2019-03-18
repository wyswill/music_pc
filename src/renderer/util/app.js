export default {
  components: {
    musicPlay: require("../components/music_play/music_play.vue").default
  },
  data() {
    return {
      music_type_list: [
        "个性推荐",
        "歌单",
        "主播电台",
        "排行榜",
        "歌手",
        "最新音乐",
        "b",
        "f"
      ]
    };
  },
  methods: {
    is_active(e) {
      let flag = e.target.innerText;
      if (flag == "b") window.history.back();
      if (flag == "f") window.history.forward();
      /* 设置选中样式 
      ------------------*/
      this.seet_active();
      /* 获取相应的数据
      ----------------- */
      let type = e.target.innerText;
      switch (type) {
        case "个性推荐":
          this.$router.push("/");
          break;
        case "歌单":
          this.$router.push("sun_list");
          break;
        case "主播电台":
          this.$router.push("zhuBo");
          break;
        case "排行榜":
          this.$router.push("paiHangBang");
          break;
        case "歌手":
          this.$router.push("seaner");
          break;
        case "最新音乐":
          this.$router.push("newMusic");
          break;
      }
    },
    seet_active() {
      /* 清除所有的样式 
      ------------------*/
      let li = document.querySelectorAll(".navBar li");
      li.forEach(ele => {
        ele.className = "";
      });
      /* 获取hash 
      ------------------*/
      let hash = window.location.hash;
      let arr = [
        "#/",
        "#/sun_list",
        "#/zhuBo",
        "#/paiHangBang",
        "#/seaner",
        "#/newMusic"
      ];
      // 设置样式
      arr.forEach((ele, index) => {
        if (ele == hash) {
          li[index].className = "active";
        }
      });
    },
    play_music() {
      this.$on("play_music", ele => {
        console.log(ele);
      });
    }
  },
  mounted() {
    /* 设置选中样式 
      ------------------*/
    this.seet_active();
  },
  updated() {
    /* 设置选中样式 
    ------------------*/
    this.seet_active();
  }
};
