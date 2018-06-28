<template>
	<div class="publicIframe">
		<a href="javascript:history.back();" class="return"></a>
		<iframe :style="{height:dHeight+'px'}" class="iframe1" :src="query.src">	
		</iframe>          
	</div>
</template>

<script>
	export default{	
		data(){
			return{
				query:this.$router.currentRoute.query,
				dHeight:document.documentElement.clientHeight,
			}
		},

		methods:{

		},
		components:{} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';  
	
	.return{ width: 50px; height: 50px; position: fixed; left: 0; top: 0; z-index: 999999999; }
</style>