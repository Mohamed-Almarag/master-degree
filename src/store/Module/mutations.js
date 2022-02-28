export default {
  SET_MODELS(state, models) {
    return (state.models = models);
  },
  SET_SINGLE_MODULE(state, data) {
    return (state.singleModule = data);
  },
  GET_EXAMS(state, data) {
    return (state.exams = data);
  },
  SET_MODULE_EXAM_QUESTIONS(state, data) {
    return (state.examQuestions = data);
  },
  SUBMIT_EXAM(state, data) {
    return (state.submitExam = data);
  },
  GET_ACTIVITIES(state, data) {
    return (state.activites = data);
  },
  GET_CATEGORIES(state, data) {
    return (state.allCategories = data);
  },
};
