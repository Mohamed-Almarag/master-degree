import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import LearningStyle from "@/components/DetailsContentPage/LearningStyle.vue";
import SingleModule from "@/components/SingleModule/SingleModule.vue";
import SignUp from "@/components/Registration/SignUp.vue";
import LogIn from "@/components/Registration/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "@/views/About.vue"),
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: () =>
      import(/* webpackChunkName: "Instructions" */ "@/views/Instructions.vue"),
  },
  {
    path: "/library",
    name: "Library",
    component: () =>
      import(/* webpackChunkName: "Library" */ "@/views/Library.vue"),
  },
  {
    path: "/library/:id",
    name: "SingleModuleResorses",
    component: () =>
      import(
        /* webpackChunkName: "SingleModuleResorses" */ "@/components/ViewsPages/Library/SingleModuleResorses.vue"
      ),
  },
  {
    path: "/objectivies",
    name: "Objectivies",
    component: () =>
      import(/* webpackChunkName: "Objectivies" */ "@/views/Objectivies.vue"),
  },
  {
    path: "/details-content",
    name: "DetailsContent",
    component: () =>
      import(
        /* webpackChunkName: "DetailsContent" */ "@/views/DetailsContent.vue"
      ),
  },
  {
    path: "/details-content/:id",
    name: "SingleModule",
    component: SingleModule,
  },

  {
    path: "/learning-style",
    name: "LearningStyle",
    component: LearningStyle,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "@/views/ContactUs.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "@/views/Profile.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
