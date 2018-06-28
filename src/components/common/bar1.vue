<template>
	<div class="bar1">
		<div class="barWrap">
			<div :style="{width:width1+'%'}" class="bar"></div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['width'],
		data(){
			return{
				width1:0,		
			}
		},
		mounted(){
			(function(This){
				if(This.width){
					setTimeout(()=>{
						This.width1=This.width;
					});
				}
			})(this);
		},
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   

	.barWrap{
		width: 100%;
		background-color: #ddd;
		height: 6px;
		border-radius: 3px;
		margin: 13px 0;
		.bar{
			width: 0;
			height: 100%;
			background-color: $cp;
			border-radius: 3px;
			transition: all 1s linear 0s;
			-webkit-transition: all 1s linear 0s;
		}
	}
</style>