import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: require("@/components/geXingTuiJian/geXingTuiJian").default
    },
    {
      path: "/sun_list",
      name: "sun_list",
      component: require("@/components/index").default
    },
    {
      path: "/zhuBo",
      name: "zhuBo",
      component: require("@/components/zhuBo/zhuBo").default
    },
    {
      path: "/paiHangBang",
      name: "paiHangBang",
      component: require("@/components/paiHangBang/paiHangBang").default
    },
    {
      path: "/seaner",
      name: "seaner",
      component: require("@/components/seaner/seaner").default
    },
    {
      path: "/newMusic",
      name: "newMusic",
      component: require("@/components/newMusic/newMusic").default
    },
    {
      path: "/showInfo",
      name: "showInfo",
      component: require("@/components/showInfo/showInfo").default
    },
    {
      path: "/songList",
      name: "songList",
      component: require("@/components/songList").default
    },
    {
      path: "/vidio",
      name: "vidio",
      component: require("@/container/vidio/index").default
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
