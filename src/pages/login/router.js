/**
 * @description 默认路由
 * @author Jake
 * 2019年5月15日
 */
import Vue from 'vue'
import Router from 'vue-router'
import commonRouter from '@/router/common/index.js'
Vue.use(Router)
const Login = resolve => require(['@/views/login/index.vue'], resolve)
const Index = resolve => require(['@/views/index/Index.vue'], resolve)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login.html',
            name: 'Login',
            component: Login
        }, {
            path: '/index.html',
            name: 'Index',
            component: Index
        },
        ...commonRouter
    ]
})

const whiteList = ['/', '/login', '/404']
router.beforeEach((to, from, next) => {
    let tokenID = '123456'
    if (whiteList.indexOf(to.path) >= 0) {
        next()
    } else if (!tokenID) {
        next({ path: '/login' })
    } else {
        next()
    }
})

export default router
