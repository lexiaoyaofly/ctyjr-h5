import modules from './modules'
import Vue from 'vue'
import Router from '@/plugin/uni-simple-router/index.js'
import {ACCESS_TOKEN} from '@/common/util/constants.js'

Vue.use(Router)
//初始化
const router = new Router({
	encodeURI:true,  
    routes: [...modules]//路由表
});

const whiteList = ['/pages/login/login'] 
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	let token=uni.getStorageSync(ACCESS_TOKEN);
	//20210328新增公开部分不需要登录
	 if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
	        if(token){
	        	 next()
	        }else{
	        	console.log(to.path)
	        	if (whiteList.indexOf(to.path) !== -1) {
	        		console.log(whiteList.indexOf(to.path))
	        	  next()
	        	}else{
	        	  next({ path: '/pages/login/login'})
	        	}
	        }
		} else {
			next();
		} 
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log("afterEach")
})
export default router;