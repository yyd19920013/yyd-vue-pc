<template>
	<div class="financeDetail">
		<section class="content">
			<div class="basic">
				<div class="fl">
					<nav1 :rules="rules"></nav1>
					
					<div class="title">
						<h3>西西购车贷2017112911340001</h3>
					</div>

					<div class="main">
						<ul>
							<li>
								<div class="div1">
									<h3>18%</h3>
									<h4>年化收益率</h4>
								</div>
								<div class="div2">
									<h4>预计收益率12%</h4>
									<h4>项目状态：未投满</h4>
								</div>
							</li>
							<li>
								<div class="div1">
									<h3>3个月</h3>
									<h4>项目期限</h4>
								</div>
								<div class="div2">
									<h4>还款方式：等额本息</h4>
								</div>
							</li>
							<li>
								<bar1 :width="50"></bar1>
								<h4>进度50%</h4>
							</li>
						</ul>
					</div>
				</div>
				<div class="fr">   
					<div class="title">
						<span>
							剩余可投：<i>3,000,000.00</i>元
						</span>
					</div>
					<div class="main">
						<div class="price"> 
							账户余额<i>2500.00</i>元
						</div>
						<div class="price"> 
							账户余额<a>登陆</a>后可见
						</div>
						<div class="inputWrap">
							<input type="number" placeholder="100元起投" />
							<em>元</em>
						</div>
						<div class="handle">
							<span class="fl">
								<em>到期收益<i>45.00</i>元</em>
								<em>最大可投金额2500元</em>
								<em>投标金额不能少于100元</em>
							</span>
							<span class="fr">
								<a>全投</a>
								<router-link to="/finance/financeInvest">
									充值
								</router-link>
							</span>
						</div>
					</div>

					<div class="button1">
						<button type="button">投资/投标?</button>
					</div>
				</div>
			</div>		

			<ul class="imgWrap">
				<li>
					<img src="/static/images/icon/icon (3).png" alt="图片"/>
					<h3>100元起投</h3>
				</li>
				<li>
					<img src="/static/images/icon/icon (7).png" alt="图片"/>
					<h3>返虚拟币</h3>
				</li>
				<li>
					<img src="/static/images/icon/icon (19).png" alt="图片"/>
					<h3>投资无限额</h3>
				</li>
			</ul>

			<div class="detail">
				<ol class="tab">
					<li>
						<a class="active">项目详情</a>
					</li>
					<li>
						<a>还款来源</a>
					</li>
					<li>
						<a>投资列表</a>
					</li>
				</ol>

				<div class="itemDetail option active">
					<ul>
						<li>
							<div class="title">
								<i></i>
								<span>借款人信息</span>
							</div>
							<div class="main identity">
								<ul>
									<li>
										<div class="div1"></div>
									</li>
									<li>
										<div class="div2"></div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="title">
								<i></i>
								<span>车辆信息</span>
							</div>
							<div class="main">
								<h3>
									<span>车辆型号：</span>
									<em>奥迪A8 2018款手自一体</em>
								</h3>
								<h3>
									<span>车辆类别：奥迪</span>
									<em></em>
								</h3>
								<h3>
									<span>当前车价：50万</span>
									<em></em>
								</h3>
							</div>
						</li>
						<li>
							<div class="title">
								<i></i>
								<span>资质审核信息</span>
							</div>
							<div class="main">
								<h3>
									<span>来源门店：</span>
									<em>浙江省杭州市奥迪4S店</em>
								</h3>
								<h3>
									<span>审核人：傅傲天</span>
									<em></em>
								</h3>
								<h3>
									<span>审核资料：哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或</span>
									<em></em>
								</h3>
							</div>
						</li>
						<li>
							<div class="main">
								<span>
									车架号：通过
								</span>
								<span>
									合同资料：通过
								</span>
								<span>
									车辆外观前照：通过
								</span>
								<span>
									二代身份证：通过
								</span>

								<span>
									车辆外观前照：通过
								</span>
								<span>
									驾驶证：通过
								</span>
								<span>
									车辆外内饰照片：通过
								</span>
								<span>
									身份证验证图：通过
								</span>

								<span>
									中科台照片：通过
								</span>
								<span>
									行驶证：通过
								</span>
								<span>
									铭牌照片：通过
								</span>
								<span>
									保单：通过
								</span>

								<span>
									车辆后备箱照片：通过
								</span>
								<span>
									里程表照片：通过
								</span>
								<span>
									通讯录（借款人资料）：通过
								</span>
								<span>
									违章信息：通过
								</span>

								<span>
									申请表：通过
								</span>
								<span>
									其他资料：通过
								</span>
								<span>
									合同资料：通过
								</span>
								<span>
									人车合照：通过
								</span>

								<span>
									登记证书：通过
								</span>
								<span>
									发动机：通过
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="repayment option">
					<h3>
						<span>第一还款来源：</span>
						<em>借款人</em>
					</h3>
					<h3>
						<span>第二还款来源：</span>
						<em>分险备用金</em>
					</h3>
					<h3>
						<span>第三还款来源：</span>
						<em>还款抵押物代偿</em>
					</h3>
				</div>

				<div class="investmentList option">
					<table>
						<tr>
							<th>序号</th>
							<th>投资用户</th>
							<th>投资金额(元)</th>
							<th>投资时间</th>
						</tr>
						<tr>
							<td>1</td>
							<td>182****8539</td>
							<td>3,000,000.00</td>
							<td>2017-12-27    14:25:16</td>
						</tr>
						<tr>
							<td>2</td>
							<td>182****8539</td>
							<td>3,000,000.00</td>
							<td>2017-12-27    14:25:16</td>
						</tr>
						<tr>
							<td>3</td>
							<td>182****8539</td>
							<td>3,000,000.00</td>
							<td>2017-12-27    14:25:16</td>
						</tr>
					</table>

					<div class="paging1">
						<div class="wrap">
							<span>上一页</span>
							<i>1</i>
							<i>2</i>	
							<i>3</i>
							<span>下一页</span>
							<input type="number" />
							<span>跳转</span>
							<em>共333条记录，33页</em>
						</div>
					</div>
				</div>
			</div>
			
			<div class="hint">
				温馨提示：市场有风险，投资需谨慎
			</div>
		</section>	
	</div>
</template>

<script>
	import $ from 'jquery';
	import bar1 from 'components/common/bar1.vue';

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
			//选项卡切换
			(function(This){
				$('.tab li').each(function(index,element){
					$(this).on('click',function(){
						$('.tab a').removeClass('active');
						$('.tab a').eq(index).addClass('active');
						$('.option').removeClass('active');
						$('.option').eq(index).addClass('active');
					});			
				});	
			})(this);
		},
		methods:{
			
		},
		components:{bar1} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   
	
	.basic{
		width: 100%;
		height: 234px;
		margin: 30px 0;
		overflow: hidden;
		>.fl{
			width: 840px;
			padding: 20px;
			height: 100%;
			background-color: #fff;
			@extend .shadow1;
			.title{
				line-height: 19px;
				padding: 10px 0;
				color: #666;
				border-bottom: 1px solid #ddd;
			}
			.main{
				padding: 10px 0;
				ul{
					width: 100%;
					position: relative;
					overflow: hidden;
					li{
						float: left;
						width: (100%/3);
						h3,h4{
							line-height: 26px;
							color: #666;
							font-size: 12px;
						}
						.div1{
							padding-bottom: 20px;
							h3{
								font-size: 16px;
								color: $cp;
							}
						}
						.div2{
							h3{
								font-size: 16px;
							}
						}
					}
					li:last-of-type{
						position: absolute;
						right: 0;
						top: 50%;
						transform: translate3d(0,-50%,0);
						-webkit-transform: translate3d(0,-50%,0);
					}
				}	
			}
		}
		>.fr{
			width: 330px;
			padding: 20px;
			height: 100%;
			background-color: #fff;
			@extend .shadow1;
			.title{
				width: 100%;
				line-height: 20px;
				color: #666;
				font-size: 12px;
				i{
					font-size: 14px;
					color: #333;
				}	
			}
			.main{
				width: 100%;
				padding: 20px 0;
				.price{
					width: 100%;
					font-size: 12px;
					color: #666;
					i,a{
						color: $cp;
					}
				}
				.inputWrap{
					width: 100%;
					padding: 0 10px;
					margin: 10px 0;
					height: 30px;
					line-height: 28px;
					border: 1px solid #ddd;
					border-radius: 3px;
					color: #666;
					position: relative;
					input{
						width: 100%;
						padding-right: 50px;
						border: none;
					}
					em{
						width: 50px;
						text-align: right;
						position: absolute;
						top: 0;
						right: 10px;
						z-index: 10px;
					}
				}
				.handle{
					width: 100%;
					overflow: hidden;
					.fl{
						padding: 5px 0;
						line-height: 20px;
						color: #666;
						font-size: 12px;
						em{
							color: #ff0000;
							i{
								color: #ff0000;
								font-size: 14px;
							}
						}
						em:first-of-type{
							color: #666;
						}
					}
					.fr{
						padding: 5px 0;
						a{
							float: left;
							padding: 0 5px;
							margin: 0 5px;
							height: 20px;
							line-height: 20px;
							background-color: #FF6800;
							color: #fff;
							border-radius: 3px;
						}
						a:nth-of-type(2){
							background-color: #FFA400;
						}
					}
				}
			}
			@include button1();
		}
	}

	.content>.imgWrap{
		width: 100%;
		margin-bottom: 30px;
		background-color: #fff;
		@extend .shadow1;
		overflow: hidden;
		li{
			float: left;
			width: (100%/3);
			padding: 20px 0;
			text-align: center;
			background-size: 40%;
			img{
				height: 120px;
			}
			h3{
				line-height: 30px;
				padding-top: 30px;
				color: #666;
			}
		}
	}

	.detail{
		width: 100%;
		background-color: #fff;
		@extend .shadow1;
		.tab{
			width: 100%;
			height: 50px;
			line-height: 49px;
			border-bottom: 1px solid #ddd;
			li{
				float: left;
				padding: 0 40px;
				height: 100%;
				a{
					float: left;
					padding: 0 20px;
				}
				a.active{
					border-bottom: 3px solid $cp;
					color: $cp;
				}
				a:hover{
					color: $cp;
				}
			}
		}
		.itemDetail{
			width: 100%;
			padding: 20px;
			>ul>li{
				.title{
					line-height: 30px;
					overflow: hidden;
					i{
						float: left;
						width: 8px;
						margin: 11px;
						height: 8px;
						background-color: $cp;
						border-radius: 4px;
					}
					span{
						float: left;
						color: #333;
					}
				}
				.main{
					padding: 10px 30px;
					line-height: 26px;
					overflow: hidden;
					span,em{
						font-size: 12px;
						color: #666;
					}
				}
				.identity{
					width: 100%;
					padding: 0 80px;
					overflow: hidden;
					ul{
						overflow: hidden;
						li{
							float: left;
							width: 50%;
							padding: 10px 50px;
							overflow: hidden;
							.div1,.div2{
								width: 100%;
								padding-top: 60%;
								background: url('/static/images/example/example (3).png') no-repeat center center;
								background-size: cover;
							}
							.div2{
								background-image: url('/static/images/example/example (4).png');
							}
						}
					}
				}
			}
			>ul>li:last-of-type{
				border-top: 1px solid #ddd;
				span{
					float: left;
					width: 25%;
				}
			}
		}
		.repayment{
			width: 100%;
			padding: 20px;
			h3{
				padding: 5px 0;
				line-height: 20px;
				color: #333;
			}
		}
		.investmentList{
			width: 100%;
			padding: 20px;
			table{
				width: 100%;
				th,td{
					width: 25%;
					padding: 10px 0;
					line-height: 20px;
					text-align: center;
					font-weight: normal;
				}
				tr:first-of-type{
					background-color: #eee;
				}
			}
		}
	}

	.hint{ 
		width: 100%;
		padding: 0 20px;
		line-height: 30px;
		color: #666;
		font-size: 12px;
	}

	@include paging1();
</style>