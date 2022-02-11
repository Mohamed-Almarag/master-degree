import { createStore } from "vuex";

import Auth from "./AuthModule/index";
import Module from "./Module/index";
import Profile from "./Profile/index";
import Questionaire from "./Questionaire/index";
import Library from "./Library/index";

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Module,
    Profile,
    Questionaire,
    Library,
  },
});
