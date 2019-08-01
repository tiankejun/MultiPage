/**
 * @description 默认路由
 * @author Jake
 * 2019年5月15日
 */
import Vue from 'vue'
import Router from 'vue-router'
import commonRouter from '@/router/common/index.js'
Vue.use(Router)

const Guide = resolve => require(['@/views/guide/Index.vue'], resolve)
const Test1 = resolve => require(['@/views/guide/Test1.vue'], resolve)
const Test2 = resolve => require(['@/views/guide/Test2.vue'], resolve)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/guide.html',
            name: 'Guide',
            redirect: '/guide/test1',
            component: Guide,
            children: [{
                path: '/guide/test1',
                name: 'Test1',
                component: Test1
            }, {
                path: '/guide/test2',
                name: 'Test2',
                component: Test2
            }]
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
