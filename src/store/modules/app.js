const app = {
  state: {
    data: [],
    startPage: true
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      console.log(state)
    },
    GET_STATES_INDEX: (state, params) => {
      console.log('view 调用 store 方法, 并传递了参数', params)
    },
    SET_START_PAGE: (state, value) => {
      state.startPage = value
    }
  },
  actions: {
    toggleSideBar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    getStatesOnIndex ({ commit }, params) {
      commit('GET_STATES_INDEX', params)
    },
    setStartPage ({ commit }, value) {
      commit('SET_START_PAGE', value)
    }
  }
}

export default app
