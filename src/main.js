import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

// Auth Google and Facebook
import vue3GoogleLogin from "vue3-google-login";

import "@/assets/styles/main.css";

import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: process.env.VUE_APP_CLIENT_ID,
});

app.use(store).use(ElementPlus).use(router).mount("#app");
