<template>
  <div class="container mt-5">
    <div class="col-md-4 card p-5 offset-md-4">
      <h2 class="mb-3">Iniciar Sesión</h2>
      <form @submit.prevent="loginMethod">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <el-input
            name="email"
            v-model="username"
            type="text"
            placeholder="Ingrese Correo"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <el-input
            name="password"
            v-model="password"
            type="password"
            show-password
            placeholder="Ingrese contraseña"
          />
        </div>
        <div ref="recaptcha" class="g-recaptcha" style="margin-top: 5px"></div>
        <button type="submit" class="btn btn-primary" style="margin-top: 10px">
          Iniciar Sesión
        </button>
        <button
          @click="google"
          class="btn btn-primary"
          style="margin-top: 10px"
        >
          Iniciar Sesión con Google
        </button>
        <button
          @click="facebook"
          class="btn btn-primary"
          style="margin-top: 10px"
        >
          Iniciar Sesión con Facebook
        </button>
      </form>

      <p class="text-center mt-4">
        <router-link to="/register">¿No tienes cuenta? Regístrate</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      recaptchaInstance: null, // Almacena la instancia de reCAPTCHA
    };
  },
  methods: {
    ...mapActions("login", ["loginAction"]),
    async loginMethod() {
      try {
        // Verifica si reCAPTCHA está resuelto
        const isRecaptchaSolved = await this.verifyRecaptcha();

        if (isRecaptchaSolved) {
          const credentials = {
            username: this.username,
            password: this.password,
          };

          const resLogin = await this.loginAction(credentials);

          if (resLogin) {
            this.$router.push("/main");
          } else {
            ElMessage({
              message: "Credenciales Inválidas",
              type: "error",
            });
          }
        } else {
          ElMessage({
            message: "Por favor, completa la verificación reCAPTCHA",
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
    async verifyRecaptcha() {
      return new Promise((resolve) => {
        // Verifica si reCAPTCHA está resuelto
        if (this.recaptchaInstance) {
          this.recaptchaInstance.execute();
          this.recaptchaInstance.reset();

          // El resultado de reCAPTCHA se manejará en la devolución de llamada "onSubmit"
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
    // Función de devolución de llamada para el éxito de reCAPTCHA
    onSubmit() {
      // Manejo del captcha exitoso
    },
  },

  mounted() {
    this.recaptchaInstance = window.grecaptcha.render(this.$refs.recaptcha, {
      sitekey: "6LfF1PQnAAAAABAKnlDnQdragoFNGYkOx3anuxqz",
      callback: this.onSubmit,
    });
  },
};
</script>
