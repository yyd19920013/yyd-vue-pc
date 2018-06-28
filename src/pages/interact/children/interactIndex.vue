<template>
	<div class="interactIndex">
		<section class="content">
			<nav2 :index="0"></nav2>

			<div class="wrap">
				<div class="fl">
					<div class="title">
						最新动态
					</div>
					<ul class="articleList">
						<articleList1 v-for="articleList in 5" :list="articleList">
						</articleList1>	
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
				<div class="fr">
					<div class="title">
						热门推荐
					</div>

					<ul class="recommendList">
						<li>
							<a>
								<div class="main multiLine-2">
									【理财交流】网贷信不信得过？怎么保障我的权益?保障我的...
								</div>
								<div class="end">
									<div class="fl">
										2017-11-24
									</div>
									<div class="fr">
										<span>阅读1023</span>
										<span>回复26</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a>
								<div class="main multiLine-2">
									【理财交流】网贷信不信得过？怎么保障我的权益?保障我的...
								</div>
								<div class="end">
									<div class="fl">
										2017-11-24
									</div>
									<div class="fr">
										<span>阅读1023</span>
										<span>回复26</span>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a>
								<div class="main multiLine-2">
									【理财交流】网贷信不信得过？怎么保障我的权益?保障我的...
								</div>
								<div class="end">
									<div class="fl">
										2017-11-24
									</div>
									<div class="fr">
										<span>阅读1023</span>
										<span>回复26</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>	
	</div>
</template>

<script>
	import $ from 'jquery';
	import nav2 from 'components/common/nav2.vue';
	import articleList1 from 'components/common/articleList1.vue';

	export default{	
		data(){
			return{
				query:this.$router.currentRoute.query,
				articleList:[],
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{nav2,articleList1} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   
	
	.content>.wrap{
		width: 100%;
		margin-bottom: 30px;
		overflow: hidden;
		>.fl{
			width: 840px; 
			background-color: #fff;
			@extend .shadow1;
			>.title{
				width: 100%;
				padding: 0 20px;
				height: 50px;
				line-height: 49px;
				color: #333;
				border-bottom: 1px solid #ddd;
			}
			.articleList{

			}
			@include paging1();
		}
		>.fr{
			width: 330px;
			background-color: #fff;
			@extend .shadow1;
			>.title{
				width: 100%;
				padding: 0 20px;
				height: 50px;
				line-height: 49px;
				color: #333;
				border-bottom: 1px solid #ddd;
			}
			.recommendList{
				li{
					padding: 20px;
					border-bottom: 1px solid #ddd;
					.main{
						line-height: 20px;
						margin-bottom: 10px;
						color: #666;
						font-size: 12px;
					}
					.end{
						line-height: 20px;
						overflow: hidden;
						.fl,span{
							color: #666;
							font-size: 12px;
						}
						span{
							padding: 0 5px;
						}
					}
				}
			}
		}
	}
</style>