import Vue from 'vue'
import Vuex from 'vuex'
import { snackbar } from "./modules/snackbar";
import { loadingPage } from "./modules/loading-page";
import { modalBasic } from "./modules/modal-basic";

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    snackbar,
    loadingPage,
    modalBasic
  },
})