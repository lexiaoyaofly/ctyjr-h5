<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgColor="bg-gradual-orange" :isBack="true">
				<!-- <block slot="backText">返回</block> -->
				<block slot="content">列表</block>
			</cu-custom>
			<!-- 头部图片 -->
			<topimg />
			<!-- 搜索框 -->
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text"
						placeholder="请输入关键词" confirm-type="search">
					</input>
				</view>
				<view class="action">
					<button class="cu-btn bg-gradual-orange shadow-blur round" @tap="search">搜索</button>
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item" v-for="(item, index) in dataList" :key="index" @click="getDetails(item.id)">
					<view class="cu-avatar round lg"
						:style="[{backgroundImage:'url(' + ((item.pic && item.pic.length > 0)?item.pic:'/static/avatar_boy.png') + ')' }]">
					</view>
					<view class="content">
						<view>
							<view class="text-cut">{{item.title}}</view>
							<view class="cu-tag round bg-red sm">{{item.keywords}}</view>
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut"> {{item.excerpt}}</view>
						</view>
					</view>
					<view>
						<view class="text-grey  text-xs">{{item.publishDate}}</view>
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
				keywords: "",
				modalName: null,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				dataList: [],
				postsType: "",
			};
		},
		onLoad(option) {

			this.getDataList()
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			inputChange() {
				this.$emit('change', this.value)
			},
			InputFocus() {
				console.log('搜索框focus')
			},
			InputBlur(e) {
				this.keywords = event.target.value
				console.log('搜索框blur' + event.target.value)
			},
			search(e) {
				console.log(e);
				this.dataList = [];
				this.getDataList()
				console.log('tap');
			},
			getDataList() {
				console.log(this.keywords)
				this.postsType = getApp().globalData.byrw
				api.getPList({
					"keywords": this.keywords,
					"postsType": this.postsType
				}).then(res => {
					console.dir(res.data)
					if (res.data.code == 200 && res.data.result.length > 0) {
						for (let i = 0; i < res.data.result.length; i++) {
							let tem = res.data.result[i]
							let pic = (tem.pic && tem.pic.length > 0) ? api.getFileAccessHttpUrl(tem.pic) :
								'/static/avatar_boy.png'
							this.dataList.push({
								id: tem.id,
								title: tem.title,
								content: tem.content,
								publishDate: tem.publishDate,
								pic: pic,
								keywords: tem.keywords,
								excerpt: tem.excerpt
							})
						}

					}
				}).catch(e => {
					console.log("请求错误", e)
				})
			},
			getDetails(id) {
				console.log("id=" + id)
				uni.navigateTo({
					url: "/pages/publish/content?id=" + id
				})
			}

		},
		components: {
			topimg
		},
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>
