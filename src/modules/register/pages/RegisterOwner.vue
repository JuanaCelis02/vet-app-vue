<template>
  <div class="container mt-5 shadow bg-body-tertiary rounded p-5">
    <h2 class="text-center form-title">REGISTRO DUEÑO</h2>
    <section class="mt-3">
      <h3 class="label-title f-25">Información basica</h3>
      <div class="row mb-2">
        <div class="col">
          <label for="name" class="label-title">Nombre</label>
          <el-input
            name="name"
            v-model="client.firstName"
            type="text"
            placeholder="Ingrese Nombre"
          />
        </div>
        <div class="col">
          <label for="lastname" class="label-title">Apellido</label>
          <el-input
            name="name"
            v-model="client.lastName"
            type="text"
            placeholder="Ingrese Apellido"
          />
        </div>
        <div class="col">
          <label for="type" class="label-title">Tipo Identificación</label>
          <div>
            <el-select
              class="w-100"
              v-model="client.typeId"
              placeholder="Seleciona Tipo"
            >
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <label for="numberId" class="label-title">N° Identificación</label>
          <el-input
            name="numberId"
            v-model="client.numberId"
            type="text"
            placeholder="Ingrese Número"
          />
        </div>
        <div class="col">
          <label for="homeAddress" class="label-title">Dirección</label>
          <el-input
            name="homeAddress"
            v-model="client.homeAddress"
            type="text"
            placeholder="Ingrese Dirección"
          />
        </div>
        <div class="col"></div>
      </div>
      <div class="row mb-2">
        <h3 class="label-title f-25">Información de contacto</h3>
        <div class="col">
          <label for="phoneNumber" class="label-title">Telefono</label>
          <el-input
            name="name"
            v-model="client.phoneNumber"
            type="number"
            placeholder="Ingrese Telefono"
          />
        </div>
        <div class="col">
          <label for="lastname" class="label-title">Correo</label>
          <el-input
            name="name"
            v-model="client.email"
            type=""
            placeholder="Ingrese Correo"
          />
        </div>
        <div class="col"></div>
      </div>
      <div>
        <div class="d-flex justify-content-between mt-2">
          <div></div>
          <div class="d-flex gap-2">
            <div>
              <button class="btn" @click="clearForm">Descartar</button>
            </div>
            <div>
              <button class="btn btn-helpet" @click="submit()">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      types: [{ value: "DNI" }, { value: "Cédula" }, { value: "Pasaporte" }],
      client: {
        firstName: "",
        lastName: "",
        typeId: "",
        numberId: "",
        homeAddress: "",
        phoneNumber: "",
        email: "",
        idTenant: sessionStorage.getItem("id_tenant") || 1,
      },
    };
  },
  methods: {
    ...mapActions("login", ["createCliente"]),
    clearForm() {
      (this.client.firstName = ""),
        (this.client.lastName = ""),
        (this.client.typeId = ""),
        (this.client.numberId = ""),
        (this.client.homeAddress = ""),
        (this.client.phoneNumber = ""),
        (this.client.email = ""),
        (this.client.idTenant = "");
    },
    submit() {
      const idTenant = sessionStorage.getItem("id_tenant") || 1;
      this.client.idTenant = idTenant;
      const resp = this.createCliente(this.client);
      if (resp) {
        this.clearForm();
        ElMessage({
          message: "Cliente Creado con Exito",
          type: "success",
        });
      }
    },
  },
};
</script>

<style></style>
