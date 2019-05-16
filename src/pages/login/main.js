import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from '@/store'

import '@/assets/css/common.less'

Vue.config.productionTip = false

window.VueExpress = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
