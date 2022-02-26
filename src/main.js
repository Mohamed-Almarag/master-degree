import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faUser,
  faDove,
  faWindowClose,
  faEnvelope,
  faPhoneAlt,
  faEye,
  faMapMarkerAlt,
  faGraduationCap,
  faHeart,
  faArrowUp,
  faQuestion,
  faCamera,
  faTimes,
  faPen,
  faDownload,
  faImage,
  faComment,
  faBullseye,
  faBookOpen,
  faChalkboardTeacher,
  faClipboard,
  faTasks,
  faFilePdf,
  faPaperPlane,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faYoutube,
  faGithub,
  faFacebook,
  faWhatsapp,
  faCoffee,
  faUser,
  faDove,
  faWindowClose,
  faEnvelope,
  faPhoneAlt,
  faEye,
  faMapMarkerAlt,
  faGraduationCap,
  faHeart,
  faArrowUp,
  faQuestion,
  faCamera,
  faTimes,
  faPen,
  faDownload,
  faImage,
  faComment,
  faBullseye,
  faBookOpen,
  faChalkboardTeacher,
  faClipboard,
  faTasks,
  faFilePdf,
  faPaperPlane,
  faExternalLinkAlt
);
import { justSpecificWords } from "@/filters/filters";
import { postMethods } from "@/axios/helpers";
const app = createApp(App);

app.component("fa", FontAwesomeIcon);
// import VueSound from "vue-sound";
// app.component(VueSound);

import GlobalComponents from "@/components/Global/GlobalComponents.js";
GlobalComponents.forEach((component) => {
  app.component(component.name, component);
});

import "bootstrap-v4-rtl";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";

app.use(store).use(router).mount("#app");
app.config.globalProperties.justSpecificWords = justSpecificWords;
app.config.globalProperties.postMethods = postMethods;
