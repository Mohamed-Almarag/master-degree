// import Vue from "vue";
import axios from "axios";

const domain = "https://education.arkanorg.com/api/";

const axiosIns = axios.create({
  baseURL: domain,

  // headers: {
  //   authorization: `Bearer ${token}`,
  // },
});

// Vue.prototype.$http = axiosIns;

export default axiosIns;
