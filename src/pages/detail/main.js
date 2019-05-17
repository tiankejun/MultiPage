import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from '@/store'
import MyPlugin from '@/tools/index.js'

import '@/assets/css/common.less'
Vue.use(MyPlugin)

Vue.config.productionTip = false

window.VueExpress = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
