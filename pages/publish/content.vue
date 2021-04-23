<template>
	<view>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">详情</block>
		</cu-custom>
		<scroll-view>
			<!-- 头部图片 -->
			<topimg />
			<!-- 退役军人关爱基金会-单页面 -->

			<view class="solid-bottom text-center" :style="[{animation: 'show 0.6s 1'}]">
				<view class="bg-white action title padding-sm">
					{{title}}

				</view>
				<view class="bg-white text-gray text-sm padding-bottom-xs">
					发布日期: {{publishDate}}
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
				id: '',
				title: '',
				contenInfo: '',
				publishDate: ''
			};
		},
		onLoad: function(option) {
			console.log(option.id)
			this.id = option.id
		},
		onReady() {
			// 开始加载数据，修改 where 条件后才开始去加载 clinetDB 的数据 ，需要等组件渲染完毕后才开始执行 loadData，所以不能再 onLoad 中执行
			if (this.id) { // ID 不为空，则发起查询
				this.loadData()
			} else {
				uni.showToast({
					icon: 'none',
					title: '出错了，新闻ID为空'
				})
			}
		},
		methods: {
			loadData() {
				api.getDetails({
					'id': this.id
				}).then(res => {
					console.dir(res.data)
					if (res.data.code == 200) {
						//获取数据
						this.title = res.data.result.title
						this.publishDate = res.data.result.publishDate
						this.contenInfo = res.data.result.content
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
</style>
