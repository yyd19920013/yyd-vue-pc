import {
	UPDARA_USERINFO,
} from './mutation-types.js';

export default {
	updateLoadingStatus(state, payload){//更新路由状态
      state.isLoading=payload.isLoading
    },
    [UPDARA_USERINFO](state,data){//更新用户信息
    	state.userInfo=data;
    },
}
