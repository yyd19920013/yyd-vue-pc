import App from 'src/App';

//定义组件
//测试
const test=()=>import('pages/test/test');

//首页
const home=()=>import('pages/home/home');


//404页面
const page404=()=>import('pages/page404/page404');


//配置路由规则
export default[{
    path:'/',
    component:App, //顶层路由，对应index.html
    children:[ //二级路由。对应App.vue
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
                keepPos:true,
            },
        },
        //首页
        {
            path:'/home',
            component:home,
        },
        //404页面
        {
            path:'*',
            component:page404,
        },
    ]
}]