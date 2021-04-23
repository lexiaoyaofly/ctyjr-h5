<template name='topimg'>
	<view>
		<scroll-view>
			<!-- 轮播 -->
			<swiper class="screen-swiper square-dot"  :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" :style="[{animation: 'show 0.2s 1'}]">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
		</scroll-view>
	</view>
</template>

<script>
	export default {
	name: "topimg",
	data() {
		return {
			 swiperList: [
				  {id:1,type: 'image',url: '/static/banner/top.png', link: ''},
				  // {id:2,type: 'image',url: '/static/banner/banner2.jpg', link: ''},
				  // {id:3,type: 'image',url: '/static/banner/banner3.jpg', link: ''},
				  // {id:4,type: 'image',url: '/static/banner/banner4.jpg', link: ''},
				],
			}
	},
	}
</script>

