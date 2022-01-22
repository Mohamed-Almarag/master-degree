import { createStore } from "vuex";

import Auth from "./AuthModule/index";
import Module from "./Module/index";

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Module,
  },
});
