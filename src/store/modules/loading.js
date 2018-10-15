
const state = {
  loading: false
}

const getters = {
  getLoadingState: state => state.loading
}

const actions = {}

const mutations = {
  setLoadingState(state, value) {
    state.loading = value
    console.log(value)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}