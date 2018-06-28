<template>
	<div class="nav2">
		<div class="navWrap">
			<router-link to="/interact" :class="{active:index==0}">
				所有
			</router-link>	
			<router-link to="/interact/interactNews" :class="{active:index==1}">
				平台新闻
			</router-link>	
			<a :class="{active:index==2}">
				媒体报道
			</a>	
			<a :class="{active:index==3}">
				平台公告
			</a>	
			<a :class="{active:index==4}">
				建议反馈
			</a>
			<a :class="{active:index==5}">
				理财交流
			</a>	
			<a :class="{active:index==6}">
				我的主题
			</a>		
		</div>	
	</div>
</template>

<script>
	export default{
		props:['index'],
		data(){
			return{
	
			}
		},
		mounted(){
			
		},
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   

	.navWrap{
		width: 100%;
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		a{
			float: left;
			padding: 0 30px;
			color: #333;
		}
		a:hover,a.active{
			color: $cp;
		}
	}
</style>