<template>
	<div class="home">
		<header1 bIndex="0"></header1>		
		<section class="content">
			<el-carousel height="300px">
		      <el-carousel-item v-for="item in 4" :key="item">
		        <a class="imgWrap">
		        	<img style="background-image:url('/static/images/bg/bg (1).png')" src="/static/images/null.png" alt="图片">	
		        </a>
		      </el-carousel-item>
		    </el-carousel>
		    <div style="width:100%;height:300px;line-height:300px;text-align:center;font-size:100px;">
		    	这是首页
		    </div>
		</section>
	</div>
</template>

<script>
	export default{	
		data(){
			return{
				query:this.$router.currentRoute.query,
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   

	.content{
		.imgWrap{
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
				background: url('/static/images/logo.png') no-repeat center center;
				background-size: cover;
			}
		}
	}
</style>