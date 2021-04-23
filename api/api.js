import { http } from '@/common/service/service.js' 
import configService from '@/common/service/config.service.js';
const apiService = {
	 
	 /**
	  * 登录
	  */
	login(params) {
		return http.post('/sys/mLogin',params)	
	},
	/**
	  * 手机号码登录
	  */
	phoneNoLogin(params) {
		return http.post('/sys/phoneLogin',params);
	},
	/**
	  * 退出
	  */
	logout(params) {
		return http.post('/sys/logout',params);
	},
	/**
	  * 关于我们数据
	  */
	getPageList(params) {
		console.log('123',params)	
		// return http.get('/GxxcApiCommon/pagelist',{'title':'联系我们'});
		return http.get('/GxxcApiCommon/pagelist',{data:params});
	},
	/**
	  * 图文多条信息列表
	  */
	getPList(params) {
		return http.get('/GxxcApiCommon/piclist',{data:params});
	},
	/**
	  * 获取详情信息
	  */
	getDetails(params) {
		return http.get('/GxxcApiCommon/queryById',{data:params});
	},
	/**
	 * 获取文件访问路径
	 * @param avatar
	 * @param subStr
	 * @returns {*}
	 */
	getFileAccessHttpUrl(avatar,subStr){
	    if(!subStr) subStr = 'http'
	    if(avatar && avatar.startsWith(subStr)){
	        return avatar;
	    }else{
	        return configService.staticDomainURL + "/" + avatar;
	    }
	}
};

export default apiService;
