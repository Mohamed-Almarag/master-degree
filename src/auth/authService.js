import EventEmitter from "events";

// import store from "@/store/store.js"

// 'loggedIn' is used in other parts of application. So, Don't forget to change there also
const localStorageKey = "loggedIn";

const tokenExpiryKey = "tokenExpiry";
const loginEvent = "loginEvent";

class AuthService extends EventEmitter {
  idToken = null;
  profile = null;
  tokenExpiry = null;

  // Starts the user login flow

  // Handles the callback request from Auth0

  logOut() {
    localStorage.removeItem(localStorageKey);
    localStorage.removeItem(tokenExpiryKey);
    localStorage.removeItem("userInfo");

    this.idToken = null;
    this.tokenExpiry = null;
    this.profile = null;

    this.emit(loginEvent, { loggedIn: false });
  }

  isAuthenticated() {
    return localStorage.getItem(localStorageKey) === "true";
  }
}

export default new AuthService();
