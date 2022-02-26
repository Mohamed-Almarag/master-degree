import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import LearningStyle from "@/components/DetailsContentPage/LearningStyle.vue";
import SingleModule from "@/components/SingleModule/SingleModule.vue";
import SignUp from "@/components/Registration/SignUp.vue";
import LogIn from "@/components/Registration/LogIn.vue";
import auth from "@/auth/authService";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {
    //   authRequired: true,
    // },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "@/views/About.vue"),
    // meta: {
    //   authRequired: true,
    // },
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: () =>
      import(/* webpackChunkName: "Instructions" */ "@/views/Instructions.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/library",
    name: "Library",
    component: () =>
      import(/* webpackChunkName: "Library" */ "@/views/Library.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/library/:id",
    name: "SingleModuleResorses",
    component: () =>
      import(
        /* webpackChunkName: "SingleModuleResorses" */ "@/components/ViewsPages/Library/SingleModuleResorses.vue"
      ),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/objectivies",
    name: "Objectivies",
    component: () =>
      import(/* webpackChunkName: "Objectivies" */ "@/views/Objectivies.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/details-content",
    name: "DetailsContent",
    component: () =>
      import(
        /* webpackChunkName: "DetailsContent" */ "@/views/DetailsContent.vue"
      ),
    meta: {
      authRequired: true,
    },
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
    meta: {
      // authRequired: true,
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "@/views/ContactUs.vue"),
    // meta: {
    //   authRequired: true,
    // },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "@/views/Profile.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/social",
    name: "SocialMedia",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "@/views/SocialMedia.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    // meta: {
    //   authRequired: false,
    // },
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    // meta: {
    //   authRequired: false,
    // },
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.authRequired) {
    if (!auth.isAuthenticated()) {
      return router.push({ path: "login", query: { to: to.path } });
    } else if (auth.isAuthenticated() && !auth.checkCategory()) {
      return router.push({ path: "learning-style", query: { to: to.path } });
    }
  }
});

export default router;
