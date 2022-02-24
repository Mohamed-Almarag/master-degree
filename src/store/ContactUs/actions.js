import { postMethods } from "@/axios/helpers";

export default {
  async contactUs({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/contacts/create", payload)
        .then((response) => {
          commit("CONTACT_US", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
