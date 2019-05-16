/**
 * @description 默认路由
 * @author Jake
 * 2019年5月15日
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => require(['@/views/index/Index.vue'], resolve)
const About = resolve => require(['@/views/About.vue'], resolve)
const error404 = resolve => require(['@/views/Error404'], resolve)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Root',
            component: Index
        },
        {
            path: '/index.html',
            name: 'Index',
            component: Index
        }, {
            path: '/About',
            name: 'About',
            component: About
        }, {
            path: '*',
            name: '404',
            component: error404
        }
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
