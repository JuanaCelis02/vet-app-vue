<template>
  <div class="container">
    <h2>Usuarios</h2>
    <el-table :data="users" border style="width: 100%">
      <el-table-column prop="id_directory" label="ID" />
      <el-table-column prop="username" label="User Name" />
      <el-table-column prop="access_email" label="Email" />
      <el-table-column prop="id_tenant" label="Id Tenant" />
      <el-table-column prop="id_role" label="Role" />
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("login", ["users", "IdTenant"]),
  },
  methods: {
    ...mapActions("login", ["getAllUsers"]),
    async getUsers() {
      await this.getAllUsers(this.IdTenant || 1);
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style></style>
