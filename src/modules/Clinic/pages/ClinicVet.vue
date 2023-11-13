<template>
  <div>
    <h2 class="text-center">Clinica</h2>
    <div class="d-flex justify-content-between">
      <div></div>
      <div>
        <button class="btn btn-primary mb-3" @click="dialogRegister = true">
          Nuevo Registro
        </button>
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
    <form-register-clinic
      :idRecord="idRecord"
      :showDialogRecord="dialogRegister"
      @update:showDialogRecord="updateShowDialogRecord"
    />
  </div>
</template>

<script>
import FormRegisterClinic from "../components/FormRegisterClinic.vue";

export default {
  components: {
    FormRegisterClinic,
  },
  data() {
    return {
      dialogRegister: false,
      idRecord: "",
    };
  },
  methods: {
    updateShowDialogRecord(value) {
      this.dialogRegister = value;
    },
  },
};
</script>

<style></style>
