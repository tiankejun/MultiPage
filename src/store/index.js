import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

import common from './common/'

Vue.use(Vuex)

const modules = {
    common
}

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: modules,
    plugins: [createLogger(), createPersistedState()]
})
