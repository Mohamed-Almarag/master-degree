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
        commit("SUBMIT_QUESTIONAIRES", response.data.data);
        console.log(response.data);
        let studentData = JSON.parse(localStorage.getItem("student-data"));
        studentData.data.category_id = response.data.data.categoryId;
        // let someChangesInStudentData = Object.assign({}, studentData, {
        //   category_id: response.data.data.categoryId,
        // });
        localStorage.setItem("student-data", JSON.stringify(studentData));
        console.log(response.data.data.categoryId);
      }
    );
  },
};
