import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex)

const state = {

}

const mutations = {

}

const actions = {

}
// 
const getters = {

}
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})