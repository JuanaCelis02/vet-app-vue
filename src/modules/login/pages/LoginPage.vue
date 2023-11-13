<template>
  <div class="login-container">
    <div class="row card-login">
      <div class="col img-cover"></div>
      <div class="col d-flex">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <div class="d-flex justify-content-center">
            <div class="helpet-logo"></div>
          </div>
          <div class="text-center">
            <span class="label-title f-25"> ¡Inicia sesión en tu cuenta! </span>
          </div>
          <div class="inputs my-3">
            <label for="email" class="label-title f-20">Username:</label>
            <input
              type="text"
              v-model="username"
              name="email"
              class="inputs-login"
              placeholder="Ingrese Username"
            />
          </div>
          <div class="inputs">
            <label for="password" class="label-title f-20">Contraseña</label>
            <input
              type="password"
              v-model="password"
              name="password"
              class="inputs-login"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div class="d-flex justify-content-center mb-3">
            <button class="btn btn-helpet" @click="loginMethod">
              Iniciar sesión
            </button>
          </div>
          <div>
            <div
              class="d-flex justify-content-center align-self-center dflex-column gap-1"
            >
              <div class="social">
                <GoogleLogin :callback="callback"></GoogleLogin>
              </div>
              <div class="social">
                <FacebookLogin :appId="'1523240061773549'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ElMessage } from "element-plus";
import FacebookLogin from "@/modules/login/components/FacebookLogin.vue";

export default {
  components: {
    FacebookLogin,
  },
  data() {
    return {
      username: "",
      password: "",
      appId: process.env.VUE_APP_APP_ID,
    };
  },
  setup() {
    const callback = (response) => {
      console.log("Handle the response", response);
    };

    return {
      callback,
    };
  },
  methods: {
    ...mapActions("login", ["loginAction"]),
    async loginMethod() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const resLogin = await this.loginAction(credentials);
        if (resLogin) {
          this.$router.push("/main");
        } else {
          ElMessage({
            message: "Credenciales Invalidas",
            type: "error",
          });
        }
      } catch (error) {
        ElMessage({
          message: `${error}`,
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  position: relative;
  background: rgba(200, 205, 204, 0.82) !important;
}
.card-login {
  width: 880px;
  height: 650px;
  background-color: #fff !important;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 5% 0 0 -440px;
  border-radius: 10px;
}
.img-cover {
  background-image: url("../../../assets/images/cover-login.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 0 0 10px;
}
.helpet-logo {
  width: 118px;
  height: 176px;
  background-image: url("../../../assets/images/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.inputs-login {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #cd595a;
}
.btn-helpet {
  margin-top: 50px;
}
.social {
  display: block;
}
</style>
