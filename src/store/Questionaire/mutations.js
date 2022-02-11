export default {
  GET_QUESTIONAIRES(state, data) {
    return (state.questionaires = data);
  },
  SUBMIT_QUESTIONAIRES(state, data) {
    return (state.submitQuestionaires = data);
  },
};
