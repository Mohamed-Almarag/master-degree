import { postMethods } from "@/axios/helpers";

export default {
  async signUp({ commit }, payload) {
    await postMethods("student/register", payload)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          commit("SET_USER_AUTHENTICATION", response.data);
        }
      })
      .catch((error) => {
        commit("SIGN_UP_ERRORS_MESSAGES", error.response.data);
      });
  },

  async signIn({ commit }, payload) {
    return await postMethods("student/login", payload)
      .then((response) => {
        let studentData = response.data;
        if (response.status === 200) {
          commit("SET_USER_AUTHENTICATION", response);
          commit("SET_TOKEN", response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("student-data", JSON.stringify(studentData));
        }
      })
      .catch((error) => {
        commit("SIGN_IN_ERRORS_MESSAGES", error.response);
        localStorage.removeItem("token");
        localStorage.removeItem("studentData");
      });
  },
  logOut({ commit }) {
    localStorage.removeItem("token");
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem("student-data");
    commit("LOG_OUT");
  },
};
