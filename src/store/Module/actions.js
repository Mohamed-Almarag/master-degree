import { getMethods } from "@/axios/helpers";
// import axios from "@/axios/axios";

export default {
  getModels({ commit }) {
    return new Promise((resolve, reject) => {
      getMethods("/student/modules")
        .then((response) => {
          commit("SET_MODELS", response.data.data);

          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
