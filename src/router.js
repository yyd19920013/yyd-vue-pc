import App from './App.vue'

//定义组件
//测试
const test = r => require.ensure([], () => r(require('./pages/test/test.vue')), 'test');



//首页
const home = r => require.ensure([], () => r(require('./pages/home/home.vue')), 'home');

//理财
const finance = r => require.ensure([], () => r(require('./pages/finance/finance.vue')), 'finance');
//理财首页
const financeIndex = r => require.ensure([], () => r(require('./pages/finance/children/financeIndex.vue')), 'financeIndex');
//理财详情
const financeDetail = r => require.ensure([], () => r(require('./pages/finance/children/financeDetail.vue')), 'financeDetail');
//理财投资提交
const financeInvest = r => require.ensure([], () => r(require('./pages/finance/children/financeInvest.vue')), 'financeInvest');
//理财支付
const financePay = r => require.ensure([], () => r(require('./pages/finance/children/financePay.vue')), 'financePay');
//理财支付成功
const financePaySuccess = r => require.ensure([], () => r(require('./pages/finance/children/financePaySuccess.vue')), 'financePaySuccess');

//互动
const interact = r => require.ensure([], () => r(require('./pages/interact/interact.vue')), 'interact');
//互动首页
const interactIndex = r => require.ensure([], () => r(require('./pages/interact/children/interactIndex.vue')), 'interactIndex');
//互动-平台新闻
const interactNews = r => require.ensure([], () => r(require('./pages/interact/children/interactNews.vue')), 'interactNews');

//个人中心
const userIndex = r => require.ensure([], () => r(require('./pages/user/userIndex/userIndex.vue')), 'userIndex');

//公用内联框架
const publicIframe = r => require.ensure([], () => r(require('./pages/publicIframe/publicIframe.vue')), 'publicIframe');

//404页面
const page404 = r => require.ensure([], () => r(require('./pages/page404/page404.vue')), 'page404');

//配置路由规则
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
    	{
            path:'',
            redirect:'/home',      	
        },
        //测试页面
        {
			path:'/test', 
			component:test,
			meta:{
				noLogin:true,
			},
		},	
		//首页
		{
			path:'/home',
			component:home,	
			meta:{
				noLogin:true,
			},	
		},
		//理财
		{
			path:'/finance',
			component:finance,	
			meta:{
				noLogin:true,
			},	
			children:[
				{
					path:'',//理财首页
					component:financeIndex,
					meta:{
						noLogin:true,
					},
				},
				{
					path:'financeDetail',//理财详情
					component:financeDetail,
					meta:{
						noLogin:true,
					}, 
				},
				{
					path:'financeInvest',//理财投资提交
					component:financeInvest,
				},
				{
					path:'financePay',//理财支付
					component:financePay,
				},
				{
					path:'financePaySuccess',//理财支付成功
					component:financePaySuccess,
				},
			],
		},
		//互动
		{
			path:'/interact',
			component:interact,	
			meta:{
				noLogin:true,
			},	
			children:[
				{
					path:'',//互动首页
					component:interactIndex,
					meta:{
						noLogin:true,
					},
				},
				{
					path:'interactNews',//平台新闻
					component:interactNews,
					meta:{
						noLogin:true,
					},
				},
			],
		},
		//个人中心首页
		{
			path:'/user/userIndex',
			component:userIndex,
			meta:{
				noLogin:true,
			},	
		},
		//公用内联框架
		{
			path:'publicIframe',
			component:publicIframe,
			meta:{
				noLogin:true,
			},
		},
		//404页面
		{
			path:'*',
			component:page404,
			meta:{
				noLogin:true,
			},
		},
    ]
}]