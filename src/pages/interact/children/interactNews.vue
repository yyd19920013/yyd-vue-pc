<template>
	<div class="interactNews">
		<section class="content">
			<nav2 :index="1"></nav2>	

			<div class="wrap">
				<div class="title">
					<nav1 :rules="rules"></nav1>
				</div>

				<ul class="articleList">
					
				</ul>
			</div>
		</section>	
	</div>
</template>

<script>
	import $ from 'jquery';
	import nav1 from 'components/common/nav1.vue';
	import nav2 from 'components/common/nav2.vue';
	import articleList1 from 'components/common/articleList1.vue';

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
				articleList:[],
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{nav1,nav2,articleList1} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   
	
	.wrap{
		width: 100%;
		background-color: #fff;
		margin-bottom: 30px;
		@extend .shadow1;
		
	}
</style>