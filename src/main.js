import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './router.js';
import store from './store';

import 'src/ELE.js';
import fastClick from 'fastClick';
import * as yyd from 'js/yydjs.js';
import {URL} from 'service/getData.js';
import header1 from 'components/header/header1.vue';
import footer1 from 'components/footer/footer1.vue';
import nav1 from 'components/common/nav1.vue';

//处理点击延迟
fastClick.attach(document.body); 

//调用插件
Vue.use(VueRouter);
Vue.use(Vuex);

const MyPlugin={};

MyPlugin.install=function(Vue,options) {
	// 1. 添加全局方法或属性
	//获取相对域名
	Vue.prototype.URL=function(){
		return URL;
	};
	//获取绝对域名
	Vue.prototype.URL1=function(){
		return window.location.origin;
	};
	//功能正在开发提示
	Vue.prototype.HINT=function(){
		vm.$message({
			type:'',
			message: '该功能尚未开放，敬请期待！',
	    });
	};
	//下载app提示
	Vue.prototype.HINT1=function(){
		vm.$alert(
			'网页版不支持该功能，请下载app进行体验！',
			'提示！',
			{
				confirmButtonText:'确定',
				callback:data=>{
					
				}
			}
		); 
	};
	//获取个人信息
	Vue.prototype.getUserInfo=function(endFn,str,noHint){
		// let {alerts,store,cookie}=vm.method;
		// let [arr,arr1]=[[],[]];
		// let query=vm.$router.currentRoute.query;

		// if(noHint){
		// 	myMemberInfo(function(data){
		// 		endFn&&endFn(data);	
		// 	});
		// 	return;
		// }
		// if(cookie.get('AccessToken')){
		// 	myMemberInfo(function(data){	
		// 		if(data.code==0){
		// 			if(vm.$router.currentRoute.path=='/user/log'){				
		// 				vm.$vux.alert.show({
		// 				  title:'提示！',
		// 				  content:'已登录！',
		// 				  onHide(){
		// 				  	vm.$router.go(-1);
		// 				  }
		// 				});	 
		// 			}
		// 			store.set('getUserInfo',data.data);
		// 			endFn&&endFn(data);	
		// 		}else{
		// 			vm.$vux.alert.show({
		// 			  title:'提示！',
		// 			  content:data.msg,
		// 			  onHide(){
		// 			  	vm.$router.push({path:'/user/log',query:{rid:query.rid}});
		// 			  }
		// 			});	
		// 		}							
		// 	});
		// }else{
		// 	if(vm.$router.currentRoute.path!='/user/log'){
		// 		vm.$vux.alert.show({
		// 		  title:'提示！',
		// 		  content:str||'请先登录！',
		// 		  onHide(){
		// 		  	vm.$router.push({path:'/user/log',query:{rid:query.rid}});
		// 		  }
		// 		});	
		// 	}	 		
		// }
	};
	//涉及到要获取个人信息的判断合并(二参传true会加上调用其它接口的得出的判断)
	Vue.prototype.is=function(endFn,onOff){
		// let json={
		// 	isLogin:false,
		// 	isCHRZ:false,
		// };

		// if(onOff){
		// 	json.isOneCard=false;
		// }
		// myMemberInfo(function(data){
		// 	if(data.code==0){	
		// 		json.isLogin=true;//是否登录判断

		// 		if(data.data&&data.data.CdgAuth.length){//是否进行车行认证判断
		// 			for(var i=0;i<data.data.CdgAuth.length;i++){
		// 				if(data.data.CdgAuth[i].CdgInfo.AuthStatus==1){
		// 					json.isCHRZ=true;
		// 					break;
		// 				}
		// 			}
		// 		}
		// 		if(onOff){
		// 			let json1={};

		// 			json1.ActType='CardDetail';
		// 			json1.MemberId=data.data.MemberID;
		// 			shopMembershipCarId(json1,function(data1){					
		// 				if(data1.data&&data1.data.Status==1&&vm.method.countDtime(data1.data.ExpirationTime)>0){ 
		// 					json.isOneCard=true; 
		// 				}
		// 				endFn&&endFn(json,data);
		// 			});
		// 		}
		// 	}
		// 	if(!onOff)endFn&&endFn(json,data);			
		// });							
	};

	// 2. 添加全局资源
	Vue.directive('myDirective',{
		bind(el,binding,vnode,oldVnode){//只调用一次，指令第一次绑定到元素时调用。
			
		},	
		inserted(el,binding,vnode,oldVnode){//被绑定元素插入父节点时调用

		},
		update(el,binding,vnode,oldVnode){//所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。

		},
		componentUpdated(el,binding,vnode,oldVnode){//指令所在组件的 VNode 及其子 VNode 全部更新后调用。

		},
		unbind(el,binding,vnode,oldVnode){//只调用一次，指令与元素解绑时调用。

		},
	});

	// 3. 注入组件
	Vue.mixin({
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{header1,footer1,nav1} 
	});

	// 4. 添加实例方法
	Vue.prototype.method=yyd;
}

// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin);

//时间过滤器
Vue.filter('date',function(value,format){
	if(!value&&value!=0)return;
	return vm.method.dateFormat(value,format);
});

//时间过滤器1
Vue.filter('date1',function(value){
	if(!value&&value!=0)return;
	return vm.method.dateFormat1(value);
});

//时间过滤器2
Vue.filter('date2',function(value){
	if(!value&&value!=0)return;
	let reg=/\-+/g;
				
	value=value.replace(reg,'/');

	let iDay=(+new Date()-(+new Date(value)))/(1000*60*60*24);
	return Math.round(iDay)||1;
});

//时间过滤器3
Vue.filter('date3',function(value){ 
	if(!value&&value!=0)return;
	let reg=/\-+/g;
				
	value=value.replace(reg,'/');

	let iDay=(+new Date(value)-(+new Date()))/(1000*60*60*24);
	return iDay>0?Math.ceil(iDay):0;
});

//格式化金额过滤器
Vue.filter('price',function(value,length){
	if(!value&&value!=0)return;
	return vm.method.numberComma(value,length);
});

//补0过滤器
Vue.filter('pad',function(value,length){
	if(!value&&value!=0)return;
	return vm.method.numberPad(value,length);
});

//小数点保留位数过滤器
Vue.filter('toFixed',function(value,length){
	if(!value&&value!=0)return;
	return value.toFixed(length||2);
});
	
//路由对象
const router=new VueRouter({
	routes,
});

//路由器会创建一个App示例，并且挂载到选择符#app匹配的元素上
const vm=new Vue({
	router,
	store,
}).$mount('#app');	

//开发与线上模式控制台切换
if(URL!='/api'){
	vm.method.consoleNull(['log','dir','info']);
}

//在各种不同宽度的屏幕下进行缩放
vm.method.metaViewport();

//网络处理
vm.method.networkHandle();
//下拉刷新页面
// vm.method.pullReload();
console.dir(vm);
console.dir(vm.method);

//路由改变之前显示loading
router.beforeEach(function (to, from, next) {
	document.body.classList.remove('app');//恢复正常样式
	store.commit('updateLoadingStatus', {isLoading: true});	
	next();
});

//路由改变之后隐藏loading
router.afterEach(function (to, from) {
	let defaultTitle='绿盈金服';
	let json={
				// '/home':'木有车B2B首页',
				// '/user/myShopQRcode':'店铺二维码',			
			};
	let arr=window.location.href.split('#');

	document.title=json[to.path]?json[to.path]:defaultTitle;//根据路由改变title
	// if(arr[0][arr[0].length-1]!='?'){//给#号前面加上问号(解决微信支付无法定位当前网址支付失败)
	// 	window.location.href=arr[0]+'?#'+arr[1];
	// }
	if(to.query.app){//app样式
		document.body.classList.add('app');
	}
	if(to.meta.noLogin==undefined){//判断是否登录
		vm.getUserInfo();
	}
	if(to.meta.keepPos==undefined||to.query.goTop){ 
		document.documentElement.scrollTop=document.body.scrollTop=0;	
		setTimeout(function(){//解决苹果端微信屏幕滚动太多，返回出现白屏的问题
			document.documentElement.scrollTop=document.body.scrollTop=0;	
		});
	}
	//解决页面跳转body无法滚动
	$(window).on('hashchange',function(){
		$('body').css('overflowY','auto');
		$(document).unbind('touchmove',vm.method.fix);
	});
	store.commit('updateLoadingStatus', {isLoading: false});
});

export default vm;


