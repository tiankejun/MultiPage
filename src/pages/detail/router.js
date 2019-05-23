/**
 * @description 默认路由
 * @author Jake
 * 2019年5月15日
 */
import Vue from 'vue'
import Router from 'vue-router'
import commonRouter from '@/router/common/index.js'
Vue.use(Router)
const Detail = resolve => require(['@/views/detail/index.vue'], resolve)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/detail.html',
            name: 'Detail',
            component: Detail
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
