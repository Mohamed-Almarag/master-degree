export default {
  GET_POSTS(state, data) {
    return (state.posts = data);
  },
  ADD_POST(state, post) {
    return (state.addPost = post);
  },
};
