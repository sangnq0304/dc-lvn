const state = () => ({
  loadingPage: false

});

const actions = {
  handleLoadingPage({commit}, boolean) {
    commit('CHANGE_STATUS_LOAD_PAGE', boolean)
  }
};

const mutations = {
  CHANGE_STATUS_LOAD_PAGE(state, data) {
    state.loadingPage = data
  }
}

export  const  loadingPage = {
  namespaced: true,
  actions,
  state,
  mutations,
}