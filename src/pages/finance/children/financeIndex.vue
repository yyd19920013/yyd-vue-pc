<template>
	<div class="financeIndex">
		<section class="content">
			<nav class="filter">
				<ol>
					<li>
						<span>项目类型：</span>
						<a class="active">全部</a>
						<a>西西理财</a>
						<a>西西车贷</a>
						<a>小微企业贷</a>
						<a>企业贷</a>
					</li>
					<li>
						<span>项目期限：</span>
						<a class="active">全部</a>
						<a>3个月内</a>
						<a>3-12个月</a>
						<a>12个月以上</a>
					</li>
					<li>
						<span>年利率：</span>
						<a class="active">全部</a>
						<a>6%以下</a>
						<a>6%-8%</a>
						<a>8%-10%</a>
						<a>10%以上</a>
					</li>
				</ol>		
			</nav>	

			<div class="itemWrap">
				<ol class="title">
					<li>
						<a class="active">默认排行</a>
					</li>
					<li>
						<a class="active1">年化收益率</a>
					</li>
					<li>
						<a class="active2">期限</a>
					</li>
					<li>
						<a>按剩可投</a>
					</li>
				</ol>		
				<ul class="itemList">
					<li>
						<router-link :to="{path:'/finance/financeDetail'}">
							<div class="title">
								西西西购车贷2017112911340001
							</div>
							<ul class="main">
								<li>
									<h3>18%</h3>
									<h4>年化收益率</h4>
								</li>
								<li>
									<h3>12个月</h3>
									<h4>项目期限</h4>
								</li>
								<li>
									<h3>3,000,000.00元</h3>
									<h4>剩余可投金额</h4>							
								</li>
								<li>
									<h3>等额本息</h3>
									<h4>还款方式</h4>	
								</li>
								<li>
									<bar1 :width="50"></bar1>
									<h4>进度24%</h4>	
								</li>
								<li>
									<a>马上购买</a>	
									<a>已投满</a>
								</li>
							</ul>	
						</router-link>
					</li>
					<li>
						<div class="title">
							西西西购车贷2017112911340001
						</div>
						<ul class="main">
							<li>
								<h3>18%</h3>
								<h4>年化收益率</h4>
							</li>
							<li>
								<h3>12个月</h3>
								<h4>项目期限</h4>
							</li>
							<li>
								<h3>3,000,000.00元</h3>
								<h4>剩余可投金额</h4>							
							</li>
							<li>
								<h3>等额本息</h3>
								<h4>还款方式</h4>	
							</li>
							<li>
								<bar1 :width="40"></bar1>
								<h4>进度24%</h4>	
							</li>
							<li>
								<a>马上购买</a>	
								<a>已投满</a>
							</li>
						</ul>
					</li>
					<li>
						<div class="title">
							西西西购车贷2017112911340001
						</div>
						<ul class="main">
							<li>
								<h3>18%</h3>
								<h4>年化收益率</h4>
							</li>
							<li>
								<h3>12个月</h3>
								<h4>项目期限</h4>
							</li>
							<li>
								<h3>3,000,000.00元</h3>
								<h4>剩余可投金额</h4>							
							</li>
							<li>
								<h3>等额本息</h3>
								<h4>还款方式</h4>	
							</li>
							<li>
								<bar1 :width="50"></bar1>
								<h4>进度24%</h4>	
							</li>
							<li>
								<a>马上购买</a>	
								<a>已投满</a>
							</li>
						</ul>
					</li>
				</ul>
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
			}
		},
		mounted(){
			//鼠标hover去处元素底部的线条颜色
			(function(This){
				$('.itemList>li').each(function(index,element){
					$(this).on('mouseover',function(){
						if(index==0){
							$('.itemWrap .title').addClass('active');
							$('.itemList>li').eq(index).addClass('active');
						}else{
							$('.itemList>li').eq(index-1).addClass('active');
							$('.itemList>li').eq(index).addClass('active');
						}
					});
					$(this).on('mouseout',function(){
						if(index==0){
							$('.itemWrap .title').removeClass('active');
						}else{
							$('.itemList>li').removeClass('active');
						}
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
	
	.filter{
		width: 100%;
		padding: 30px 0;
		ol{
			width: 100%;
			padding: 20px;
			@extend .shadow1;
			background-color: #fff;
			li{
				width: 100%;
				line-height: 30px;
				margin-bottom: 10px;
				overflow: hidden;
				span{
					float: left;
					width: 70px;
					text-align: right;
					color: #333;
				}
				a{
					float: left;
					padding: 0 10px;
					margin: 0 10px;
					color: #333;
				}
				a:hover{
					color: $cp;
				}
				a.active{
					background-color: $cm;
					color: $cp;
				}
			}
		}
	}
	.itemWrap{
		width: 100%;
		background-color: #fff;
		@extend .shadow1;
		margin-bottom: 30px;
		>.title{
			width: 100%;
			height: 50px;
			line-height: 49px;
			border-bottom: 1px solid #ddd;
			li{
				float: left;
				width: 25%;
				padding-left: 20px;
				a{
					display: inline-block;
					padding-right: 15px;
					background: url('/static/images/icon/icon (17).png') no-repeat right center;
					background-size: 6px;
					color: #333;	
				}
				a:hover,a[class="active"]{
					color: $cp;
				}
				a.active1{
					background-image: url('/static/images/icon/icon (11).png');
				}
				a.active2{
					background-image: url('/static/images/icon/icon (12).png');
				}
			}
		}
		>.title.active{
			border-bottom-color: transparent;
		}
		.itemList{
			>li{
				width: 100%;
				padding: 20px;
				border-bottom: 1px solid #ddd;
				&:hover{
					@extend .shadow2;
				}
				.title{
					color: #000;
					line-height: 30px;
				}
				.main{
					width: 100%;
					position: relative;
					overflow: hidden;
					li{
						float: left;
						width: 15%;
						line-height: 30px;
						text-align: center;	
						h3{
							color: #000;
						}
						h4{
							font-size: 12px;
							color: #666;
						}
					}
					li:nth-of-type(1){
						text-align: left;
						h3{
							font-size: 16px;
							color: $cp;
						}
					}
					li:nth-of-type(4){
						h3{
							font-size: 16px;
						}
					}
					li:nth-of-type(5){
						width: 25%;
					}
					li:nth-of-type(6){
						padding: 5px 0;
						a{
							padding: 0 10px;
							height: 26px;
							line-height: 26px;
							background-color: $cp;
							color: $cm;
							border-radius: 5px;
							position: absolute;
							top: 50%;
							right: 0;
							margin-top: -13px;
						}
						a:nth-of-type(1):hover{
							background-color: #e39200;
						}
						a:nth-of-type(2){
							background-color: #ddd;
							color: #666;
						}
					}	
				}
			}
			>li.active{
				border-bottom-color: transparent;
			}
		}
	}
	@include paging1();
</style>