<template>
  <nav-bar />
  <div class="d-flex">
    <div
      class="col-2 px-2 mx-2 d-flex flex-column pt-2 shadow bg-body-tertiary rounded p-5 total-h"
    >
      <div class="d-flex justify-content-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github"
          width="120"
        />
      </div>
      <el-menu
        class="el-menu-vertical-demo mt-5 ms-2"
        background-color="#f8f9fa00"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>Registro</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link class="item w-100" to="/main/records/pets">
                Mascotas
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link class="item" to="/main/records/owners">
                Dueño
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item el-menu-itemindex="3">
          <router-link class="item" to="/main">Citas</router-link>
        </el-menu-item>
        <el-menu-item el-menu-itemindex="4">
          <router-link class="item" to="/main/clinic">Clinica</router-link>
        </el-menu-item>
        <el-menu-item el-menu-itemindex="5">
          <router-link class="item" to="/main">Servicios</router-link>
        </el-menu-item>
        <el-menu-item el-menu-itemindex="4">
          <router-link class="item" to="/main">Inventario</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="col">
      <div class="container shadow bg-body-tertiary rounded p-5">
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
.item {
  display: block;
  color: black;
  text-decoration: none;
}
::v-deep .el-menu {
  border-right: none;
}
.total-h {
  height: 100vh;
}
</style>
