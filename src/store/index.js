import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import user from './modules/token'
import loading from './modules/loading'

Vue.use(Vuex)

const getters = {}
const actions = {}
export default new Vuex.Store({
  getters,
  actions,
  modules: {
    admin,
    user,
    loading
  }
})