import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 组件
const login = r => require.ensure([],() =>r(require('@/page/login')),'login')







const router = [
    {
        path: '/',
        component: 'login'
    }
]
export default new Router({
    router,
    strict: process.env.NODE_ENV !== 'production',
})
