import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import { createPersistedState, createSharedMutations } from 'vuex-electron';
Vue.use(Vuex);
export default new Vuex.Store({
	plugins: [ createPersistedState(), createSharedMutations() ],
	state: {
		loginStatus: {}
	},
	mutations,
	actions
});
