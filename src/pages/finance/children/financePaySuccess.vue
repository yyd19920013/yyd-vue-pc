<template>
	<div class="financePaySuccess">
		<section class="content">
			<div class="wrap">
				<div class="right"></div>
				<h3>投资已成功</h3>
				<h3>{{timeCount}}s后为您跳转到理财</h3>
				<h3 class="link">
					<span>您也可以去：</span>
					<router-link to="/home">
						首页
					</router-link>
					<a>
						我的账户
					</a>
					<a>
						互动
					</a>
				</h3>
			</div>
		</section>	
	</div>
</template>

<script>
	import $ from 'jquery';

	export default{	
		data(){
			return{
				query:this.$router.currentRoute.query,
				timeCount:5,
			}
		},
		mounted(){
			//5秒后跳转到理财
			(function(This){
				let {yydTimer}=This.method;

				yydTimer(function(){
					if(This.timeCount<=0){
						clear();
						This.$router.push({path:'/finance'});
					}else{
						This.timeCount--;
					}
				},1000);	
			})(this);
		},
		methods:{
			
		},
		components:{} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   
	
	.wrap{
		width: 100%;
		padding: 40px 0;
		margin: 30px 0;
		height: 600px;
		text-align: center;
		background-color: #fff;
		@extend .shadow1;
		.right{
			width: 80px;
			margin: 0 auto;
			height: 80px;
			background: url('/static/images/icon/icon (21).png') no-repeat center center;
			background-size: 80%;
		}
		h3{
			padding: 10px 0;
			line-height: 30px;
			font-size: 16px;
			font-weight: bold;
		}
		.link{
			font-weight: normal;
			font-size: 12px;
			a{
				padding: 0 5px;
				margin: 0 5px;
				background-color: $cp;
				color: #fff;
				border-radius: 2px;
			}
		}
	}	
</style>