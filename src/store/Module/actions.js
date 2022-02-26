import { getMethods, postMethods } from "@/axios/helpers";

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
  async getSingleModuleData({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/modules", payload)
        .then((response) => {
          commit("SET_SINGLE_MODULE", response.data.data);
          // console.log(response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async getExams({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/exams/module", payload)
        .then((response) => {
          commit("GET_EXAMS", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async getModuleExamQuetions({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/exams", payload)
        .then((response) => {
          commit("SET_MODULE_EXAM_QUESTIONS", response.data.data);
          console.log(response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async submitExam({ commit }, payload) {
    await postMethods("student/exams/submit", payload).then((response) => {
      commit("SUBMIT_EXAM", response.data);
    });
  },
  async getActivities({ commit }, payload) {
    await postMethods("student/modules/activities", payload).then(
      (response) => {
        commit("GET_ACTIVITIES", response.data.data);
      }
    );
  },
};
