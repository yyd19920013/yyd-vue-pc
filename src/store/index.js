import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
	isLoading:false,//当前加载状态
	userInfo:null,//用户信息
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})