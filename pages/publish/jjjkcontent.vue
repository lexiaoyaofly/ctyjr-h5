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
			<view class="content">
				<view class="cu-card bg-white solid-bottom">
					<view v-for="(item, index) in navList" :key="index" class="cu-tab padding-sm flex bg-gray"
						:class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
						{{ item.text }}
					</view>
				</view>
				<!-- 显示区域 -->
				<view class="list clear" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
					<view class="bg-white padding cauni-details-box">
						<span v-html='contenInfo'></span>
					</view>
				</view>
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
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '基金简况',
						orderList: []
					},
					{
						state: 1,
						text: '基金章程',
						orderList: []
					}
				]
			};
		},
		onLoad: function(option) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
			this.getData()
		},
		methods: {
			// changeTab(e) {
			// 	this.tabCurrentIndex = e.target.current;
			// },
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				this.getData()
			},
			getData() {
				console.log("-----------获取单页面信息------------")
				let aboutType = getApp().globalData.jjjk
				if (this.tabCurrentIndex == 1) {
					aboutType = getApp().globalData.jjzc
				}

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
			}
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

	.cu-tab {
		text-align: center;
		float: left;
	}

	.current {
		background-color: #FF0000;
		color: #FFFFFF;
		/* border-bottom: 10upx solid #FF0000; */
	}
</style>
