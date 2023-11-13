<template>
  <div class="navbar bg-navbar">
    <div class="d-flex justify-content-between align-items-center w-100">
      <div></div>
      <div>
        <button
          class="btn btn-logout d-flex align-items-center"
          @click="logOutMethod"
        >
          <span class="me-2 f-20">Salir</span>
          <img
            src="../../../assets/images/icons/logout.png"
            width="25"
            alt="logout"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Close } from "@element-plus/icons-vue";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      Close,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },

  computed: {
    ...mapState("login", ["userData"]),
  },

  methods: {
    ...mapMutations("login", ["logOut"]),
    logOutMethod() {
      this.logOut();
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.bg-navbar {
  background: #cd595a;
}
.btn-logout {
  height: 25px !important;
  padding: 0 !important;
  margin: 8px !important;
}
.f-20 {
  color: #fff;
}
</style>
