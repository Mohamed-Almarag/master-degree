import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHistory } from "vue-router";

import auth from "@/auth/authService";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
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
    component: () =>
      import(
        /* webpackChunkName: "SingleModule" */ "@/components/SingleModule/SingleModule.vue"
      ),
  },

  {
    path: "/learning-style",
    name: "LearningStyle",
    component: () =>
      import(
        /* webpackChunkName: "LearningStyle" */ "@/components/DetailsContentPage/LearningStyle.vue"
      ),
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
    component: () =>
      import(
        /* webpackChunkName: "SignUp" */ "@/components/Registration/SignUp.vue"
      ),
    // meta: {
    //   authRequired: false,
    // },
  },
  {
    path: "/environment-one",
    name: "EnvironmentOne",
    component: () =>
      import(
        /* webpackChunkName: "SignUp" */ "@/components/Registration/EnvironmentOne.vue"
      ),
    // meta: {
    //   authRequired: false,
    // },
  },
  {
    path: "/environment-two",
    name: "EnvironmentTwo",
    component: () =>
      import(
        /* webpackChunkName: "SignUp" */ "@/components/Registration/EnvironmentTwo.vue"
      ),
    // meta: {
    //   authRequired: false,
    // },
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import(
        /* webpackChunkName: "LogIn" */ "@/components/Registration/LogIn.vue"
      ),
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
      return router.push({ path: "login" });
    } else if (auth.isAuthenticated() && !auth.checkCategory()) {
      return router.push({ path: "learning-style" });
    }
  }
});

export default router;
