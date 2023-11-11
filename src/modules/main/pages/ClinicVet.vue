<template>
  <div>
    <h2 class="text-center">Clinica</h2>
    <div class="d-flex justify-content-between">
      <div></div>
      <div>
        <button class="btn btn-primary mb-3">Nuevo Registro</button>
      </div>
    </div>
    <div>
      <el-table :data="users" border style="width: 100%">
        <el-table-column prop="id_directory" label="ID" />
        <el-table-column prop="username" label="User Name" />
        <el-table-column prop="access_email" label="Email" />
        <el-table-column prop="id_tenant" label="Id Tenant" />
        <el-table-column prop="id_role" label="Role" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
