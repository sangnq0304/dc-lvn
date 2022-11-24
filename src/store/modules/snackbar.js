const state = () => ({
  obj:{
    isVisible: false,
    message: '',
    success: false,
  }
});

const actions = {};

const mutations = {
  CHANGE_STATUS_SNACKBAR(state, data) {
    state.obj = {
      isVisible: data.isVisible,
      message: data.message,
      success: data.success,
    }
  },
};
export const snackbar = {
  namespaced: true,
  state,
  actions,
  mutations,
};
