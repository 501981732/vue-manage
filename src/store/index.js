import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as types from './types'


Vue.use(Vuex)

const state = {
    username: ''
}

const mutations = {
    [types.SET_USERNAME](state,res) {
        state.username = res
    }
}

const actions = {
  // getRole({commit},param) {  
  //   api.AuthRole(param).then( res =>{
  //     if (res.code === 1) {
  //       commit(types.IS_AGENT,res.data.is_agent)
  //       commit(types.IS_COUNTRY_ANENT,res.data.is_country_agent)
  //     }
  //   })
  // },
}
// 
const getters = {
    username: state => state.username
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