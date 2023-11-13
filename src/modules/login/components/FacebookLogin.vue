<!-- FacebookLogin.vue -->
<template>
  <div>
    <button class="btn btn-facebook" @click="loginWithFacebook">
      <img src="../../../assets/images/facebook.png" height="18" />
      Acceder con Facebook
    </button>
  </div>
</template>

<script>
/* global FB */

export default {
  props: {
    appId: String,
  },
  methods: {
    loginWithFacebook() {
      // Asegúrate de que FB.init() se haya llamado antes de FB.login()
      if (typeof FB !== "undefined") {
        FB.login(
          (response) => {
            if (response.authResponse) {
              console.log("Inicio de sesión exitoso:", response);
              const accessToken = response.authResponse.accessToken;
              // Realiza acciones adicionales después del inicio de sesión exitoso
              fetch(
                `https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`
              )
                .then((response) => response.json())
                .then((data) => {
                  console.log("Datos del usuario:", data);
                  // Aquí puedes realizar acciones adicionales con los datos del usuario
                })
                .catch((error) => {
                  console.error("Error al obtener datos del usuario:", error);
                });
            } else {
              console.log("Inicio de sesión cancelado o fallido");
            }
          },
          { scope: "email" }
        );
      }
    },
  },
  mounted() {
    // Inicializa el SDK de Facebook
    window.fbAsyncInit = function () {
      FB.init({
        appId: "TU_APP_ID",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    // Carga el SDK de Facebook
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.btn-facebook {
  height: 40px !important;
  font-family: "Open Sans", arial, sans-serif !important;
  font-weight: 600 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  vertical-align: top !important;
  border: 1px solid #e8eaed !important;
  font-size: 14px !important;
}
</style>
