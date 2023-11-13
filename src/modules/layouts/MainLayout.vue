<template>
  <div class="d-flex">
    <div class="col-2 px-2 d-flex flex-column p-5 total-h">
      <div class="d-flex justify-content-center">
        <router-link to="/main">
          <img src="../../assets/images/logo-sidenav.png" alt="github" />
        </router-link>
      </div>
      <el-menu class="el-menu-vertical-demo mt-3 ms-3" background-color="#fff">
        <el-sub-menu class="mb-3" index="1">
          <template #title>
            <span class="label-title">Registro</span>
          </template>
          <el-menu-item-group>
            <el-menu-item class="mb-2" index="1-1">
              <router-link
                class="item w-100 label-title"
                to="/main/records/pets"
              >
                Mascotas
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link class="item label-title" to="/main/records/owners">
                Dueño
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item class="mb-3" el-menu-itemindex="3">
          <router-link class="item label-title" to="/main">Citas</router-link>
        </el-menu-item>
        <el-menu-item class="mb-3" el-menu-itemindex="4">
          <router-link class="item label-title" to="/main/clinic">
            Clinica
          </router-link>
        </el-menu-item>
        <el-menu-item class="mb-3" el-menu-itemindex="5">
          <router-link class="item label-title" to="/main"
            >Servicios</router-link
          >
        </el-menu-item>
        <el-menu-item el-menu-itemindex="4">
          <router-link class="item label-title" to="/main"
            >Inventario</router-link
          >
        </el-menu-item>
      </el-menu>
    </div>
    <div class="col bg-img-main">
      <nav-bar />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/modules/shared/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.bg-img-main {
  background-image: url("../../assets/images/cover-main.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.item {
  display: block;
  text-decoration: none;
}
::v-deep .el-menu {
  border-right: none;
}
.total-h {
  height: 100vh;
}
.label-title {
  font-size: 25px;
}
</style>
