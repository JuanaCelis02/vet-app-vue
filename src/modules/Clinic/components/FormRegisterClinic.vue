<template>
  <el-drawer
    :model-value="showDialogRecord"
    @update:model-value="$emit('update:showDialogRecord', $event)"
  >
    <template #header>
      <h4>{{ objectRecord ? "Actualizar" : "Crear" }} Registro</h4>
    </template>
    <template #default>
      <section>
        <h3>Servicio Médico</h3>
        <div class="row">
          <div class="col">
            <label for="nameService">Nombre Servicio</label>
            <el-input
              name="nameService"
              v-model="medicalService.nameService"
              type="text"
              placeholder="Ingrese Nombre de Servicio"
            />
          </div>
          <div class="col">
            <label for="status">Estado</label>
            <el-select
              class="w-100"
              v-model="medicalService.status"
              placeholder="Selecciona el Estado"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="tenant">Nivel de Complejidad</label>
            <el-select
              class="w-100"
              v-model="medicalService.complecityLevel"
              placeholder="Selecciona la Complejidad"
            >
              <el-option
                v-for="item in complecityOptions"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <label for="description">Descripción</label>
          <el-input
            name="description"
            v-model="medicalService.description"
            type="textarea"
            placeholder="Ingrese Descripción"
          />
        </div>
        <div class="d-flex justify-content-between">
          <div></div>
          <div>
            <button
              class="btn btn-helpet mt-2"
              @click="createMedicalServiceForm"
            >
              {{ objectRecord ? "Actualizar" : "Crear" }} Servicio Medico
            </button>
          </div>
        </div>
      </section>
      <section class="mt-2">
        <h3>Servicio Mascota</h3>
        <div class="row">
          <div class="col">
            <label for="idAnimal">Selecionar Mascota</label>
            <el-select class="w-100" v-model="animalService.idAnimal">
              <el-option
                v-for="item in animals"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="col">
            <label for="date">Inicio Servicio</label>
            <el-date-picker
              class="w-100"
              v-model="animalService.serviceDate"
              type="date"
              placeholder="Seleccionar Fecha"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="idEmployee">Empleado</label>
            <el-select class="w-100" v-model="animalService.idEmployee">
              <el-option
                v-for="item in animals"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="col">
            <label for="conclusionDate">Fin Servicio</label>
            <el-date-picker
              class="w-100"
              v-model="animalService.conclusionDate"
              type="date"
              placeholder="Seleccionar Fecha"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div></div>
          <div>
            <button class="btn btn-helpet mt-2" @click="createAnimalService">
              {{ objectRecord ? "Actualizar" : "Crear" }} Servicio Mascota
            </button>
          </div>
        </div>
      </section>
      <section>
        <h3>Resultados Médicos</h3>
        <div class="row">
          <div class="col">
            <label for="date">Fecha</label>
            <el-date-picker
              class="w-100"
              v-model="medicalResult.date"
              type="date"
              placeholder="Seleccionar Fecha"
            />
          </div>
          <div class="col">
            <label for="riskLevel">Nivel de Riesgo</label>
            <el-select class="w-100" v-model="medicalResult.riskLevel">
              <el-option
                v-for="item in riskLevels"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div>
          <label for="resumen">Resumen</label>
          <el-input
            name="resumen"
            v-model="medicalResult.resume"
            type="textarea"
            placeholder="Ingrese Resumen"
          />
        </div>
      </section>
      <section>
        <h4>Cargar Archivo</h4>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </div>
      </section>
    </template>
  </el-drawer>
</template>

<script>
import { mapActions } from "vuex";
import { ElMessage } from "element-plus";

export default {
  props: {
    objectRecord: Object,
    showDialogRecord: Boolean,
  },
  data() {
    return {
      statusOptions: [
        { label: "Activo", value: "activo" },
        { label: "Innactivo", value: "Innactivo" },
      ],
      complecityOptions: [
        { value: "Atencion primaria" },
        { value: "Especialidades" },
        { value: "Opcional" },
        { value: "Alta complejidad" },
        { value: "Critico" },
      ],
      riskLevels: [
        { value: "Bajo" },
        { value: "Leve" },
        { value: "Moderado" },
        { value: "Significativo" },
        { value: "Grave" },
      ],
      animals: [],
      medicalService: {
        nameService: "",
        description: "",
        status: "",
        idTenant: sessionStorage.getItem("id_tenant") || 1,
        complecityLevel: "",
      },
      animalService: {
        idMedicalService: "",
        idAnimal: "",
        serviceDate: "",
        conclusionDate: "",
        idEmployee: "",
      },
      medicalResult: {
        idServiceAnimal: "",
        date: "",
        resume: "",
        riskLevel: "",
      },
      fileMedical: {
        idResult: "",
        typeFile: "",
        urlFile: "",
      },
      fileList: "",
    };
  },
  methods: {
    ...mapActions("login", [
      "createMedicalService",
      "createPetService",
      "getBehavior",
    ]),
    async createMedicalServiceForm() {
      const resp = this.createMedicalService(this.medicalService);
      if (resp) {
        ElMessage({
          message: "Servicio Médico Creado con Exito",
          type: "success",
        });
      }
    },
    async createAnimalService() {
      const resp = await this.createPetService(this.animalService);
      if (resp) {
        ElMessage({
          message: "Servicio Mascota Creado con Exito",
          type: "success",
        });
      }
    },
  },
  async created() {
    console.log(this.objectRecord);
    // const behavior = await this.getBehavior(this.objectRecord.behaviorId);
    // console.log(behavior);
  },
};
</script>

<style></style>
