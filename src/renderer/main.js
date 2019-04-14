import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import api from './util/api';
import store from './vuex/stor';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app'); //手动挂载app
