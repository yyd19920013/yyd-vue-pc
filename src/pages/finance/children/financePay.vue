<template>
	<div class="financePay">
		<section class="content">
			<div class="wrap">
				<nav1 :rules="rules"></nav1>

				<ul class="payWrap">
					<li>
						<span>支付确认&nbsp&nbsp</span>
						<div class="div1"></div>
					</li>
					<li>
						<span>支付密码：</span>
						<div class="div1">
							<input type="password" placeholder="输入支付密码" />
						</div>
					</li>
					<li>
						<span></span>
						<div class="div1">
							<div class="button2">
								<router-link to="/finance/financePaySuccess">
									<button type="button">提交</button>
								</router-link>
							</div>
							<div class="hint">
								投资有风险，理财需谨慎
							</div>
						</div> 
					</li>
				</ul>
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
				rules:[
					{
						name:'首页',
						path:'/home',
					},
					{
						name:'理财',
						path:'/finance',
					},
					{
						name:'理财详情',
						path:'/finance/financeDetail',
					},
				],
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
	
	.wrap{
		width: 100%;
		margin: 30px 0;
		height: 600px;
		background-color: #fff;
		@extend .shadow1;
		.nav1{
			width: 100%;
			padding: 15px 20px;
			height: 50px;
			border-bottom: 1px solid #ddd;
		}
		
		.payWrap{
			width: 400px;
			padding: 20px 0;
			margin: 0 auto;
			li{
				padding: 10px 0;
				line-height: 40px;
				overflow: hidden;
				span{
					float: left;
					width: 120px;
					height: 40px;
					padding-right: 20px;
					text-align: right;
				}
				.div1{
					overflow: hidden;
					input{
						width: 100%;
						padding: 0 10px;
						height: 40px;
						line-height: 38px;
						border: 1px solid #ddd;
						
					}
					@include button2();
					.hint{
						line-height: 30px;
						text-align: center;
						font-size: 12px;
						color: #666;
					}
				}
			}
			li:first-of-type{
				span{
					font-size: 18px;
				}
			}
		}
	}	
</style>