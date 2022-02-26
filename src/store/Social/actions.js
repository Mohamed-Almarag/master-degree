import { postMethods, getMethods } from "@/axios/helpers";

export default {
  async getPosts({ commit }) {
    await getMethods("student/posts").then((response) => {
      console.log(response.data.data);
      commit("GET_POSTS", response.data.data);
    });
  },

  async addPost({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/posts/create", payload)
        .then((response) => {
          commit("ADD_POST", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  async getBooks({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("admin/libraries/modules", payload)
        .then((response) => {
          commit("GET_BOOKS", response.data.data);
          console.log(response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
