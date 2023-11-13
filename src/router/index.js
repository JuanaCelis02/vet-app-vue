import { createRouter, createWebHistory } from "vue-router";

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
    component: () => import("../modules/layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    alias: "/",
    children: [
      {
        path: "records/pets",
        name: "Pets",
        component: () => import("../modules/register/pages/RegisterPet.vue"),
      },
      {
        path: "records/owners",
        name: "Owners",
        component: () => import("../modules/register/pages/RegisterOwner.vue"),
      },
      {
        path: "clinic",
        name: "Clinic",
        component: () => import("../modules/Clinic/pages/ClinicVet.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
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
