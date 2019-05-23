const error404 = resolve => require(['@/views/Error404'], resolve)
export default [
    {
        path: '*',
        name: '404',
        component: error404
    }
]
