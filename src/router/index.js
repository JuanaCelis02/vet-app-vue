import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../modules/login/pages/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../modules/login/pages/RegisterPage.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../modules/main/pages/MainUsers.vue"),
    meta: { requiresAuth: true },
    alias: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("token");

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
