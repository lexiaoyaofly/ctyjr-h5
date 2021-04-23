const routes = [
	{
	 path: "/pages/login/login",
	 name: 'login',
		 meta: {
			 title: '登录',
		 },
	},
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/index/index',
      name: 'index',
        meta: {
	        title: '主页',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
    },
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/home/home',
	  //aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
	  name: 'home',
	    meta: {
	        title: '首页',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
    {
	    path: '/pages/user/people',
        name: 'people',
        meta: {
	        title: '个人中心',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
	{
	    path: '/pages/user/userdetail',
	    name: 'userdetail',
	    meta: {
	        title: '个人详情',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
	{
	    path: '/pages/user/useredit',
	    name: 'useredit',
	    meta: {
	        title: '个人编辑',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
	{
	    path: '/pages/user/userexit',
	    name: 'userexit',
	    meta: {
	        title: '退出',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
	{
	    path: '/pages/common/exit',
	    name: 'exit',
	    meta: {
	        title: '退出',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
	{
	    path: '/pages/common/success',
	    name: 'success',
	    meta: {
	        title: 'success',
			requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/component/card',
	  name: 'card',
	    meta: {
	        title: '卡片',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/component/chat',
	  name: 'chat',
	    meta: {
	        title: '联系方式',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/component/form',
	  name: 'form',
	    meta: {
	        title: '表单',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/component/steps',
	  name: 'steps',
	    meta: {
	        title: '步骤',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/component/timeline',
	  name: 'timeline',
	    meta: {
	        title: '时间轴',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/component/list',
	  name: 'list',
	    meta: {
	        title: '列表',
	    },
	},{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/byrwlist',
	  name: 'byrwlist',
	    meta: {
	        title: '榜样人物列表',
	    },
	},{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/common/topimg',
	  name: 'topimg',
	  component: 'topimg',
	    meta: {
	        title: '顶部图片',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/simplelist',
	  name: 'simplelist',
	    meta: {
	        title: '单列表',
			
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/avatarlist?type=lsfc',
	  name: 'simplelist1',
	    meta: {
	        title: '理事风采单列表',
			requireAuth:false,
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/avatarlist?type=byrw',
	  name: 'simplelist2',
	    meta: {
	        title: '榜样人物单列表',
			requireAuth:false,
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/piclist',
	  name: 'piclist',
	    meta: {
	        title: '信息发布图文矩形信息发布圆形图文列表',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/avatarlist',
	  name: 'avatarlist',
	    meta: {
	        title: '头像单列表',
			requireAuth:false,
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/jjjkcontent',
	  name: 'jjjkcontent',
	    meta: {
	        title: '基金简况',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/jjzccontent',
	  name: 'jjzccontent',
	    meta: {
	        title: '基金章程',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/lxwmcontent',
	  name: 'lxwmcontent',
	    meta: {
	        title: '联系我们',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/content',
	  name: 'content',
	    meta: {
	        title: '详情',
	    },
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/publish/card',
	  name: 'mycard',
	    meta: {
	        title: '朋友圈',
	    },
	},
]
export default routes