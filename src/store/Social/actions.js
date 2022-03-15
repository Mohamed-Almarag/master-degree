import { postMethods, getMethods } from "@/axios/helpers";

export default {
  async getPosts({ commit }) {
    return await new Promise((resolve, reject) => {
      getMethods("student/posts")
        .then((response) => {
          commit("GET_POSTS", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // Start [Add -- Edit -- Delete] Post
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
  async deletePost({ commit, state }, postId) {
    return await postMethods("student/posts/delete", {
      post_id: postId,
    }).then(() => {
      commit(
        "GET_POSTS",
        state.posts.filter((item) => item.id != postId)
      );
    });
  },
  getPostDataToEDit({ state }, postid) {
    const postData = state.posts.find((item) => item.id == postid);
    return Promise.resolve(postData);
  },
  async editPost({ state, commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/posts/update", payload)
        .then((response) => {
          commit("GET_POSTS", [...state.posts, response.data.data]);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // End [Add -- Edit -- Delete] Post

  // Start [Add -- Edit -- Delete] Comment
  async addComment({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/comments/create", payload)
        .then((response) => {
          commit("ADD_COMMENT", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  async editComment({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      postMethods("student/comments/update", payload)
        .then((response) => {
          commit("ADD_COMMENT", response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  async deleteComment({ commit }, commentid) {
    await postMethods("student/comments/delete", commentid).then(() => {
      commit("GET_POSTS");
    });
  },
  // End [Add -- Edit -- Delete] Comment
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
