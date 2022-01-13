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
  faArrowUp
);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

import GlobalComponents from "@/components/Global/GlobalComponents.js";
GlobalComponents.forEach((component) => {
  app.component(component.name, component);
});

import "bootstrap-v4-rtl";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";

app.use(store).use(router).mount("#app");
