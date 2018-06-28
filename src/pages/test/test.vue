<template>
	<div>
		<header1 title="首页"></header1>		
		<section class="content1">
			<!-- <autoplay1></autoplay1> -->
			
			<div class="nav1">
				<ul class="clear">
					<li>
						<router-link to="/businessList">
							子项目1
						</router-link>
					</li>
					<li>
						<router-link to="/spghIndex/id=232&mobile=123">
							子项目2
						</router-link>
					</li>
				</ul>
			</div>	
			
			<dateTime1 title="选择日期" placeholder="请选择日期"></dateTime1> 
			<address1 title="选择区域" placeholder="请选择区域"></address1> 
		</section>
		<footer1></footer1>
	</div>
</template>

<script>
	import header1 from 'components/header/header1.vue';
	import footer1 from 'components/footer/footer1.vue';

	export default{	
		data(){
			return{
				hint:'提示'
			}
		},
		mounted(){
			let This=this;
			let {setPromise}=This.method;  

			// setPromise(allProvince,function(data){
			// 	console.log(data); 
			// })  
			// .then(function(data){
			// 	console.log(data);
			// 	return setPromise(allCity);
			// }).then(function(data){
			// 	console.log(data);
			// }); 
		},
		methods:{
			alerts1(){
				console.dir(this)
     			this.$refs.toast1.show = true
     			this.hint='这个是弹窗'
			}
		},
		components:{header1footer1} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss'; 
	
	.nav1 ul li{ float:left; width:.8rem; height:.8rem; line-height:.8rem; text-align:center;}
</style>