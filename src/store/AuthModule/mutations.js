export default {
  SET_USER_AUTHENTICATION(state, user) {
    return (state.user = user);
  },
  SUCCESS_AUTHENTICATED(state, success) {
    return (state.success = success);
  },
  SIGN_UP_ERRORS_MESSAGES(state, signUpErrors) {
    return (state.signUpErrors = signUpErrors);
  },
  SET_TOKEN(state, token) {
    return (state.token = token);
  },
  LOG_OUT(state) {
    return state.token == null && state.user == null;
  },
};
