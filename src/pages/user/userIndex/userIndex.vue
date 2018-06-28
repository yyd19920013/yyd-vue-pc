<template>
	<div>
		<header1></header1>	
		<section class="userContent1">
			
		</section>	 
		<footer1 index="3"></footer1>            
	</div>
</template>

<script>
	import $ from 'jquery';
	import header1 from 'components/header/header1.vue';
	import footer1 from 'components/footer/footer1.vue';
	import {} from 'service/getData.js';

	export default{	
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{header1,footer1} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss'; 
	
</style>