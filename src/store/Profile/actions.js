import { postMethods, getMethods } from "@/axios/helpers";
// CHANGE_PERSONAL_DATA
export default {
  async getStudentData({ commit }) {
    await getMethods("student/profile").then((response) => {
      commit("GET_STUDENT_DATA", response.data.data);
    });
  },
  async updatePersoanlData({ commit }, payload) {
    await postMethods("student/edit_profile", payload).then((response) => {
      commit("CHANGE_PERSONAL_DATA", response.data);
    });
  },
  async updateImage({ commit }, payload) {
    await postMethods("student/edit_image_profile", payload).then(
      (response) => {
        commit("CHANGE_STUDENT_IMAGE", response.data);
      }
    );
  },
  async updatPassword({ commit }, payload) {
    await postMethods("student/change_password", payload).then((response) => {
      commit("CHANGE_PASSWORD", response.data);
    });
  },
};
