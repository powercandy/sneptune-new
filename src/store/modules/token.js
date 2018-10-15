
// token 状态管理
const state = {
  value: localStorage.getItem('token') || ''
}

const getters = {
  // 获取token
  getToken: state => state.value,
  // 判断token是否存在
  vertifyToken: state => {
    if (!state.value) return false
    return true
  }
}

const actions = {}

const mutations = {
  // 设置token
  setToken(state, value) {
    localStorage.setItem('token', value)
    state.value = value
  },
  // 清除token
  cleanToken(state) {
    localStorage.removeItem('token')
    state.value = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}