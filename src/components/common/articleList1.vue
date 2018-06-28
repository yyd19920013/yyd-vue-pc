<template>
	<li>
		<a>
			<img src="/static/images/null.png" alt="图片" />
			<div class="div1">
				<div class="title multiLine">
					【媒体报道】网贷平台，应该要怎么玩？
				</div>
				<div class="main multiLine-2">
					随着世界进入第四次的金融浪潮，金融科技正成为全球金融创新的新热点。顺应发展潮流，各国纷纷发展金融科技。数据显示，近五年全球金融科技公司数量翻了近三倍.
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
			</div>
		</a>
	</li>
</template>

<script>
	export default{
		props:['list'],
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

	li{
		width: 100%;
		padding: 20px;
		border-bottom: 1px solid #ddd;
		overflow: hidden;
		img{
			float: left;
			width: 160px;
			height: 110px;
			background: url('/static/images/bigLogo.png') no-repeat center center;
			background-size: cover;
		}
		.div1{
			overflow: hidden;
			padding-left: 20px;
		}
		&.active img{
			display: none;
		}
		&.active .div1{
			padding-left: 0;
		}
		.title{
			line-height: 30px;
			color: #333;
		}
		.main{
			line-height: 20px;
			margin-bottom: 20px;
			color: #666;
			font-size: 12px;
		}
		.end{
			line-height: 20px;
			overflow: hidden;
			.fl,span{
				font-size: 12px;
				color: #666;
			}
			.fr{
				span{
					padding: 0 5px;
				}
			}
		}
	}
</style>