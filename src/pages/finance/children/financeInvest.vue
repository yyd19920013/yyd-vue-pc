<template>
	<div class="financeInvest">
		<section class="content">
			<div class="detail">
				<nav1 :rules="rules"></nav1>
				
				<div class="wrap">
					<ul>
						<li>
							<div class="div1">
								<b>项目名称</b>
								<div class="div2">
									<span>借款类型：</span>
									<div class="div3">
										<em>西西购车贷2017112911340001</em>
									</div>		
								</div>
								<div class="div2">
									<span>年化利率：</span>
									<div class="div3">
										<em>14.4%</em>
									</div>	
								</div>	
								<div class="div2">
									<span>期限：</span>
									<div class="div3">
										<em>6个月</em>
									</div>	
								</div>
							</div>		
						</li>
						<li>
							<div class="div1">
								<b>金额收益</b>
								<div class="tzje div2">
									<span>投资金额：</span>
									<div class="div3">
										<input type="number" placeholder="请输入投资金额" />
										<em>元</em>
									</div>
								</div>
								<div class="div2">
									<span>预期收益：</span>
									<div class="div3">
										<em>124.00元+虚拟币10000个</em>
									</div>	
								</div>	
								<div class="div2">
									<span>账户余额：</span>
									<div class="div3">
										<em>12,000.00元</em>
									</div>
								</div>
							</div>			
						</li>
						<li>
							<div class="div1">
								<div class="div2">
									<span>虚拟币数量：</span>
									<div class="div3">
										<em>512000个</em>
									</div>	
								</div>
								<div class="xnbdk div2">
									<span>是否使用虚拟币抵扣：</span>
									<div class="div3">
										<div class="labelWrap">
											<label :class="{active:json.dk=='yes'}">
												<input v-model="json.dk" value="yes" name="dk" type="radio" />
												<span>是</span>
											</label>
											<label :class="{active:json.dk=='no'}">
												<input v-model="json.dk" value="no" name="dk" type="radio" />
												<span>否</span>
											</label>
										</div>
										<h3>
											<span>抵扣30000个虚拟币</span>
											<em>(￥300.00)</em>
										</h3>
									</div>
								</div>
							</div>	
						</li>
					</ul>	

					<div class="wrap1">
						<div class="agreement">
							我已阅读并同意
							<a>《产品购买协议》</a>
							且充值知晓风险
						</div>

						<div class="button2">
							<router-link to="/finance/financePay">
								<button type="button">提交</button>
							</router-link>
						</div>		

						<div class="hint">
							投资有风险，理财需谨慎
						</div>
					</div>	
				</div>
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
				json:{
					dk:'yes',
				},
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
	
	.detail{
		width: 100%;
		margin: 30px 0;
		background-color: #fff;
		@extend .shadow1;
		.nav1{
			width: 100%;
			padding: 15px 20px;
			height: 50px;
			border-bottom: 1px solid #ddd;
		}
		.wrap{
			width: 100%;
			padding: 20px 160px;	
			ul{
				li{
					width: 100%;
					padding: 10px 0;
					border-bottom: 1px solid #ddd;
					position: relative;
					.div1{
						width: 400px;
						margin: 0 auto;
						>b{
							padding: 10px 0;
							line-height: 20px;	
							font-size: 16px;
							position: absolute;
							left: 0; 
							top: 0;
						}
						.div2{
							padding: 10px 0;
							line-height: 20px;
							overflow: hidden;
							position: relative;
							>span{
								float: left;
								width: 160px;
								padding-right: 10px;
								text-align: right;
								color: #333;
							}
						}
						.div3{
							position: relative;
							overflow: hidden;
							>em{
								color: #666;
							}
						}
					}		
				}
				.tzje{
					line-height: 40px;
					>span{
						line-height: 40px;
					}
					.div3{						
						input{
							width: 100%;
							padding: 0 10px;
							padding-right: 40px;
							height: 40px;
							line-height: 38px;
							border: 1px solid #ddd;
						}
						>em{
							width: 30px;
							height: 40px;
							line-height: 40px;
							text-align: center;
							position: absolute;
							right: 0;
							top: 0;
							z-index: 10;
						}
					}
				}
				.xnbdk{
					.div3{
						.labelWrap{
							width: 100%;
							overflow: hidden;
							label{
								float: left;
								width: 50px;
								padding-left: 30px;
								margin-right: 20px;
								position: relative;
								input{
									display: none;
								}
								span{
									float: left;
								}
							}
							label:before{
								content: "";
								width: 12px;
								margin: 3px;
								height: 12px;
								border: 1px solid #999;	
								border-radius: 50%;
								position: absolute;
								left: 0; 
								top: 0;
							}
							label.active:before{
								border-color: $cp;
								background-color: $cp;
							}
						}
						h3{
							padding: 5px 0;
							line-height: 20px;
							span{
								color: #FF6800;
							}
							em{
								color: #666;
								font-size: 12px;
							}
						}
					}
				}
				li:last-of-type{
					border-bottom: none;
				}
			}
			.wrap1{
				width: 300px;
				text-align: center;
				margin: 0 auto;
				.agreement{
					line-height: 20px;
					color: #666;
					font-size: 12px;
					a{
						color: $cp;
					}
				}
				@include button2();
				.button2{
					padding: 10px 0;
				}
				.hint{
					font-size: 12px;
					color: #666;
				}
			}
		}
	}
</style>