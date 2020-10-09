import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { inputresult: null, trend3h: null },
  mutations: {
    inputresulthandler(state, payload) {
      state.inputresult = payload;
    },

    trend3hhandler(state, payload) {
      state.trend3h = payload;
    }
  },

  actions: {},
  modules: {}
});
