<template>
  <div class="App">	
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>	
	</transition>
	<footer1></footer1>
	<div id="goTop"></div>	
  </div>
</template>

<script>
	import { Loading } from 'vux';
	import { mapState } from 'vuex';
	import { goTop } from 'js/yydjs.js';

	export default {
		computed:{
			...mapState({
		      isLoading: state => state.isLoading,
		    })
		},
		mounted(){
			//回到顶部
			goTop(document.getElementById('goTop'));

			let loading=this.$loading({
				text:'努力加载中',
			});
			if(!this.isLoading){
				this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
					loading.close();
				});
			}
		},
		components:{Loading} 
	}
</script>

<style>
	@import './css/yydCommon.css';   	
</style>
