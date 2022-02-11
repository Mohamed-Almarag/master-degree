export default {
  GET_STUDENT_DATA(state, data) {
    return (state.student = data);
  },
  CHANGE_PERSONAL_DATA(state, data) {
    return (state.personalData = data);
  },
  CHANGE_STUDENT_IMAGE(state, image) {
    return (state.studentImage = image);
  },
  CHANGE_PASSWORD(state, password) {
    return (state.changePassword = password);
  },
};
