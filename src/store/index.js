import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicType:"rock"
  },
  mutations: {
    addtype(state,type){
      state.musicType = type;
    }
  },
  actions: {},
  modules: {}
});
