<template>
	<div class="interact">
		<header1 bIndex="3"></header1>
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>	
		</transition>
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

</style>