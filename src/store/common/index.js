const state = {
    name: ''
}
const mutations = {
    UPDATE_NAME (state, value) {
        state.name = value
    }
}
const actions = {
    update_name ({ commit, dispatch }, value) {
        console.log(value)
        commit('UPDATE_NAME', value)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
