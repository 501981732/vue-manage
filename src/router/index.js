import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 按需加载
const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');

Vue.use(Router)

export default new Router({
  mode: "history",
  saveScrollPosition: true,
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [{
        path: '',
        component: home,
        meta: []
      },{
        path: '/userList',
        component: userList,
        meta: ['用户列表']
      }]
    }
  ],
})


// export default [{
//     path: '/',
//     component: App, //顶层路由，对应index.html
//     children: [ //二级路由。对应App.vue
//         //地址为空时跳转home页面
//         {
//             path: '',
//             redirect: '/home'
//         },
//         //首页城市列表页
//         {
//             path: '/home',
//             component: home
//         },
//         //当前选择城市页
//         {
//             path: '/city/:cityid',
//             component: city
//         },
//         //所有商铺列表页
//         {
//             path: '/msite',
//             component: msite,
//             meta: { keepAlive: true },
//         },
//         //特色商铺列表页
//         {
//             path: '/food',
//             component: food
//         },
//         //搜索页
//         {
//             path: '/search/:geohash',
//             component: search
//         },
//         //商铺详情页
//         {
//             path: '/shop',
//             component: shop,
//             children: [{
//                 path: 'foodDetail', //食品详情页
//                 component: foodDetail,
//             }, {
//                 path: 'shopDetail', //商铺详情页
//                 component: shopDetail,
//                 children: [{
//                     path: 'shopSafe', //商铺安全认证页
//                     component: shopSafe,
//                 }, ]
//             }]
//         },
//         //确认订单页
//         {
//             path: '/confirmOrder',
//             component: confirmOrder,
//             children: [{
//                 path: 'remark', //订单备注
//                 component: remark,
//             }, {
//                 path: 'invoice', //发票抬头
//                 component: invoice,
//             }, {
//                 path: 'payment', //付款页面
//                 component: payment,
//             }, {
//                 path: 'userValidation', //用户验证
//                 component: userValidation,
//             }, {
//                 path: 'chooseAddress', //选择地址
//                 component: chooseAddress,
//                 children: [{
//                     path: 'addAddress', //添加地址
//                     component: addAddress,
//                     children: [{
//                         path: 'searchAddress', //搜索地址
//                         component: searchAddress,
//                     }]
//                 }, ]
//             }, ]
//         },
//         //登录注册页
//         {
//             path: '/login',
//             component: login
//         },
//     ]
// }]
