import Vue from "vue";
import axios from "axios";
import App from "./App";
import router from "./router";
import api from "./util/api";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: "<App/>"
}).$mount("#app"); //手动挂载app
