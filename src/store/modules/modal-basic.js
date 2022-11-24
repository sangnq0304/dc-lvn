import testTable from "@/api-service/test-table";
const state = () => ({
  isShow: false,
  obj: {}
});

const actions = {
  showModalBasic({commit}, boolean) {
    commit('SHOW_MODAL_BASIC', boolean)
  },

  getDataObj({commit}, payload) {
    commit('SET_DATA_OBJ', payload)
  },

  async deleteObj( payload) {
    try {
      const res = await testTable.deleteData(payload)
      if(res.success) {
        /// code logic
      }
    } catch (error) {
      return error
    }
  }
};

const mutations = {
  SHOW_MODAL_BASIC(state, data) {
    state.isShow = data
  },

  SET_DATA_OBJ(state, data) {
    state.obj = data
  },
};

export const modalBasic = {
  namespaced: true,
  actions,
  state,
  mutations
}