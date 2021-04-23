<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom> -->
		<scroll-view>
			<!-- 头部图片 -->
			<topimg />
			<!-- 退役军人关爱基金会-单页面 -->
			<view class="cu-bar bg-white solid-bottom" :style="[{animation: 'show 0.6s 1'}]">
				<view class="action">
					<text class='cuIcon-title text-blue'></text>{{title}}
				</view>
			</view>

			<view class="bg-white padding cauni-details-box">
				<span v-html='contenInfo'></span>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	import api from '@/api/api'
	import topimg from "../common/topimg.vue"
	export default {
		data() {
			return {
				index: -1,
				multiIndex: [0, 0, 0],
				title: '',
				contenInfo: '',
			};
		},
		onLoad: function(option) {
			console.log("-----------获取单页面信息------------")
			let aboutType = getApp().globalData.jjzc
			api.getPageList({
				'aboutType': aboutType
			}).then(res => {
				console.dir(res.data)
				if (res.data.code == 200 && res.data.result.length > 0) {
					//获取最新一条数据
					this.title = res.data.result[0].title
					this.contenInfo = res.data.result[0].content
				}
			}).catch(e => {
				console.log("请求错误", e)
			})
		},
		components: {
			topimg
		},
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
