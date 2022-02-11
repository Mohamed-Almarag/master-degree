import { postMethods, getMethods } from "@/axios/helpers";
// CHANGE_PERSONAL_DATA
export default {
  async getQuestionaires({ commit }) {
    return await new Promise((resolve, reject) => {
      getMethods("student/questionnaires")
        .then((response) => {
          commit("GET_QUESTIONAIRES", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async submitQuestionaires({ commit }, payload) {
    await postMethods("student/questionnaires/submit", payload).then(
      (response) => {
        commit("SUBMIT_QUESTIONAIRES", response.data);
      }
    );
  },
};
