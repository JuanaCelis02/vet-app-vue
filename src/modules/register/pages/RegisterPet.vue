<template>
  <div class="container mt-5 shadow bg-body-tertiary rounded p-4">
    <h2 class="text-center form-title">REGISTRO MASCOTA</h2>
    <section class="mt-3">
      <h3 class="label-title f-25">Información Basica</h3>
      <div class="row mb-2">
        <div class="col">
          <label for="name" class="label-title">Nombre</label>
          <el-input
            name="name"
            v-model="petForm.name"
            type="text"
            placeholder="Ingrese Nombre"
          />
        </div>
        <div class="col">
          <label for="bornYear" class="label-title">Año Nacimiento</label>
          <el-input
            name="bornYear"
            v-model="petForm.bornYear"
            type="text"
            placeholder="Ingrese Año de Nacimiento"
          />
        </div>
        <div class="col">
          <div class="col">
            <label for="color" class="label-title">Color</label>
            <el-input
              name="color"
              v-model="petForm.color"
              type="text"
              placeholder="Ingrese Color"
            />
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <label for="gender" class="label-title">Sexo</label>
          <div>
            <el-select
              class="w-100"
              v-model="petForm.gender"
              placeholder="Seleciona Genero"
            >
              <el-option
                v-for="item in genders"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="col">
          <div class="col">
            <label for="bornYear" class="label-title">Categoria</label>
            <div>
              <el-select
                class="w-100"
                v-model="petForm.categoryId"
                placeholder="Seleciona la Categoria"
              >
                <el-option
                  v-for="item in categories"
                  :key="item.id"
                  :label="item.specie + ' - ' + item.classe"
                  :value="item.id"
                />
              </el-select>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <div class="row">
            <div class="col">
              <label for="bornYear" class="label-title">Dueño Mascota:</label>
              <div>
                <el-select
                  class="w-100"
                  v-model="petForm.clientId"
                  placeholder="Seleciona Cliente"
                >
                  <el-option
                    v-for="item in clients"
                    :key="item.idClient"
                    :label="item.firstName"
                    :value="item.idClient"
                  />
                </el-select>
              </div>
            </div>
            <div class="col d-flex align-items-end">
              <div class="d-flex align-items-end">
                <button class="btn btn-helpet" @click="dialogClient = true">
                  Crear Cliente
                </button>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-3">
      <div class="row mb-2">
        <div class="col">
          <h3 class="label-title f-25">Información Médica</h3>
          <div class="d-flex align-items-end">
            <button class="btn btn-helpet" @click="dialogHealthInfo = true">
              Crear Información Médica
            </button>
          </div>
        </div>
        <div class="col mt-2">
          <div>
            <span v-if="healthInformation.medicalConditions">
              Condiciones Médicas: {{ healthInformation.medicalConditions }}
            </span>
          </div>
          <div v-if="healthInformation.weight">
            <span> Peso: {{ healthInformation.weight }} </span>
          </div>
        </div>
        <div class="col mt-2">
          <div v-if="healthInformation.height">
            <span> Altura: {{ healthInformation.height }} </span>
          </div>
          <div v-if="healthInformation.wingspan">
            <span> Envergadura: {{ healthInformation.wingspan }} </span>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-3">
      <h3 class="label-title f-25">Comportamiento</h3>
      <div class="row mb-2">
        <div class="col">
          <label for="bornYear" class="label-title">Comportamiento</label>
          <div>
            <el-select
              class="w-100"
              v-model="petForm.behaviorId"
              placeholder="Seleciona Comportamiento"
            >
              <el-option
                v-for="item in behaviors"
                :key="item.id"
                :label="
                  'Nivel de Actividad ' +
                  item.activityLevel +
                  ' Comportamiento ' +
                  item.specificBehaviors
                "
                :value="item.id"
              />
            </el-select>
          </div>
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </section>
    <section>
      <div class="d-flex justify-content-between mt-2">
        <div></div>
        <div class="d-flex gap-2">
          <div>
            <button class="btn">Descartar</button>
          </div>
          <div>
            <button class="btn btn-helpet" @click="createPetForm">
              Registrar
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <el-dialog
    v-model="dialogClient"
    title="Crear Cliente"
    width="50%"
    :before-close="handleClose"
  >
    <div>
      <h2 class="text-center form-title">Crear Dueño</h2>
      <section class="mt-3">
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
      </section>
    </div>
    <template #footer>
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
    </template>
  </el-dialog>

  <el-dialog
    v-model="dialogHealthInfo"
    title="Crear Información Médica"
    width="50%"
    :before-close="handleClose"
  >
    <div>
      <div class="row">
        <div class="col">
          <label for="medicalConditions" class="label-title">
            Condiciones Médicas
          </label>
          <el-input
            name="medicalConditions"
            v-model="healthInformation.medicalConditions"
            type="text"
            placeholder="Ingrese Condiciones médicas"
          />
        </div>
      </div>
      <div class="mt-3">
        <div class="row">
          <div class="col">
            <label for="weight" class="label-title">Peso (Kg)</label>
            <el-input-number
              v-model="healthInformation.weight"
              :min="1"
              :max="250"
            />
          </div>
          <div class="col">
            <label for="height" class="label-title">Altura (Cm)</label>
            <el-input-number
              v-model="healthInformation.height"
              :min="1"
              :max="250"
            />
          </div>
          <div class="col">
            <label for="wingspan" class="label-title">Envergadura (Cm)</label>
            <el-input-number
              v-model="healthInformation.wingspan"
              :min="1"
              :max="250"
            />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div>
        <div class="d-flex justify-content-between mt-2">
          <div></div>
          <div class="d-flex gap-2">
            <div>
              <button class="btn" @click="clearHealthInformation">
                Descartar
              </button>
            </div>
            <div>
              <button class="btn btn-helpet" @click="createHealthInfo()">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ElMessage } from "element-plus";

// import TableData from "@/modules/shared/components/TableUsers.vue";
export default {
  components: {
    // TableData,
  },
  computed: {
    ...mapState("login", ["clients", "behaviors", "categories"]),
  },
  data() {
    return {
      dialogCategory: false,
      dialogClient: false,
      dialogHealthInfo: false,
      dialogBehavior: false,
      genders: [
        { name: "Macho", value: "Macho" },
        { name: "Hembra", value: "Hembra" },
      ],
      types: [{ value: "DNI" }, { value: "Cédula" }, { value: "Pasaporte" }],
      petForm: {
        name: "",
        bornYear: "",
        color: "",
        gender: "",
        clientId: "",
        categoryId: "",
        healthInformationId: "",
        behaviorId: "",
      },
      healthInformation: {
        medicalConditions: "",
        weight: "",
        height: "",
        wingspan: "",
      },
      behaviorForm: {
        activityLevel: "",
        specificBehaviors: "",
      },
      categoryForm: {
        classe: "",
        subclass: "",
        specie: "",
        breed: "",
      },
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
    ...mapActions("login", [
      "createPet",
      "getAllClients",
      "getAllBehavior",
      "getAllCategories",
    ]),
    ...mapActions("login", [
      "createCliente",
      "createHealthInformation",
      "createPet",
    ]),
    clearForm() {
      (this.client.firstName = ""),
        (this.client.lastName = ""),
        (this.client.typeId = ""),
        (this.client.numberId = ""),
        (this.client.homeAddress = ""),
        (this.client.phoneNumber = ""),
        (this.client.email = ""),
        (this.client.idTenant = "");
      this.dialogClient = false;
    },
    clearHealthInformation() {
      this.healthInformation.medicalConditions = "";
      this.healthInformation.weight = "";
      this.healthInformation.height = "";
      this.healthInformation.wingspan = "";
      this.dialogHealthInfo = false;
    },
    submit() {
      const idTenant = sessionStorage.getItem("id_tenant") || 1;
      this.client.idTenant = idTenant;
      const resp = this.createCliente(this.client);
      if (resp) {
        this.dialogClient = false;
        this.clearForm();
        this.getAllClients();
        ElMessage({
          message: "Cliente Creado con Exito",
          type: "success",
        });
      }
    },
    async createHealthInfo() {
      const data = await this.createHealthInformation(this.healthInformation);
      this.petForm.healthInformationId = data.id || 1;
      if (data) {
        ElMessage({
          message: "Informacío Médica creada con Exito",
          type: "success",
        });
      }
    },
    async createPetForm() {
      const data = await this.createPet(this.petForm);
      if (data) {
        ElMessage({
          message: "Mascota Creado con Exito",
          type: "success",
        });
      }
    },
  },
  created() {
    this.getAllClients();
    this.getAllBehavior();
    this.getAllCategories();
  },
};
</script>

<style>
.label-title {
  font-size: 18px;
}
</style>
