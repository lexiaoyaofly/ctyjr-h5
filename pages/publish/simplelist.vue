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
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view v-for="(item, index) in dataList" :key="index" class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" :url="'content?id='+item.id" open-type="redirect">
						<text class='cuIcon-title text-red'></text>
						<text class="text-grey">
							{{item.title}}
						</text>
					</navigator>
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
			};
		},
		onLoad: function(e) {
			//获取当前页面数据
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
				let postsType = getApp().globalData.zcdl
				api.getPList({
					"keywords": this.keywords,
					"postsType": postsType
				}).then(res => {
					console.dir(res.data)
					if (res.data.code == 200 && res.data.result.length > 0) {
						this.dataList = this.dataList.concat(res.data.result);

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
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}
</style>
