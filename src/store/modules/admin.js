
const state = {
  user: {
    name: localStorage.getItem('user_name'),
    info: localStorage.getItem('user_info')
      ? JSON.parse(localStorage.getItem('user_info'))
      : {}
  }
}

const getters = {
  getUserName: state => state.user.name,
  getUserInfo: state => state.user.info
}

const actions = {}

const mutations = {
  setUserName(state, value) {
    localStorage.setItem('user_name', value),
    state.user.name = value
  },
  setUserInfo(state, value) {
    localStorage.setItem('user_info', JSON.stringify(value))
    state.user.info = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}