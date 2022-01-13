// import RegisterModule from "./RegisterModule/index";
// export default {
//   namespaced: true,
//   modules: {
//     RegisterModule,
//   },
// };

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
