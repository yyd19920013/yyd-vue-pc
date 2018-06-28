<template>
	<div class="nav1">
		<div class="navWrap">
			<router-link :to="rules.path" v-for="rules in rules">
				<span>{{rules.name}}</span>
				<i>></i>
			</router-link>		
		</div>	
	</div>
</template>

<script>
	export default{
		props:['rules'],
		data(){
			return{
	
			}
		},
		mounted(){
			
		},
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   

	.navWrap{
		line-height: 20px;
		a{
			color: #333;
			i{
				color: #999;
			}
		}
		a:hover{
			color: $cp;
		}
		a:last-of-type{
			color: #666;
		}
		a:last-of-type i{
			display: none;
		}
	}
</style>