<template>
  <div class="container mt-5 shadow bg-body-tertiary rounded p-4">
    <h2 class="text-center form-title">REGISTRO MASCOTA</h2>
    <section class="mt-3">
      <h3 class="label-title f-25">Información Basica</h3>
      <div class="row">
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
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          <label for="color" class="label-title">Color</label>
          <el-input
            name="color"
            v-model="petForm.color"
            type="text"
            placeholder="Ingrese Color"
          />
        </div>
        <div class="col">
          <label for="gender" class="label-title">Genero</label>
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
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <label for="bornYear" class="label-title">Cliente</label>
              <div>
                <el-select
                  class="w-100"
                  v-model="petForm.dialogCategory"
                  placeholder="Seleciona Cliente"
                >
                  <el-option
                    v-for="item in clients"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="col d-flex align-items-end">
              <div class="d-flex align-items-end">
                <button class="btn btn-primary" @click="dialogClient = true">
                  Crear Cliente
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <label for="bornYear" class="label-title">Categoria</label>
              <div>
                <el-select
                  class="w-100"
                  v-model="petForm.dialogCategory"
                  placeholder="Seleciona la Categoria"
                >
                  <el-option
                    v-for="item in categories"
                    :key="item.value"
                    :label="item.name"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <div class="col d-flex align-items-end">
              <div class="d-flex align-items-end">
                <button class="btn btn-primary" @click="dialogCategory = true">
                  Crear Categoria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-3">
      <h3>Información Médica</h3>
      <div class="row">
        <div class="col">
          <el-select
            class="w-100"
            v-model="petForm.dialogCategory"
            placeholder="Seleciona la Información Médica"
          >
            <el-option
              v-for="item in categories"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="col">
          <div class="d-flex align-items-end">
            <button class="btn btn-primary" @click="dialogHealthInfo = true">
              Crear Información Médica
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-3">
      <h2>Comportamiento</h2>
      <div class="row">
        <div class="col">
          <label for="specificBehaviors" class="label-title">
            Comportamiento
          </label>
          <el-input
            name="medicalConditions"
            v-model="petForm.behavior.specificBehaviors"
            type="textarea"
            placeholder="Especificar comportamiento"
          />
        </div>
        <div class="col d-flex flex-column">
          <label for="activityLevel" class="label-title">
            Nivel de Actividad
          </label>
          <el-input-number
            v-model="petForm.behavior.activityLevel"
            :min="1"
            :max="50"
          />
        </div>
      </div>
    </section>
  </div>

  <el-dialog
    v-model="dialogCategory"
    title="Crear Categoria"
    width="30%"
    :before-close="handleClose"
  >
    <div>
      <div class="row">
        <div class="col">
          <label for="classe" class="label-title"> Clase </label>
          <el-input
            name="medicalConditions"
            v-model="categoryForm.classe"
            type="text"
            placeholder="Especificar comportamiento"
          />
        </div>
        <div class="col">
          <label for="subclass" class="label-title"> Sub Clase </label>
          <el-input
            name="medicalConditions"
            v-model="categoryForm.subclass"
            type="text"
            placeholder="Especificar comportamiento"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="specie" class="label-title"> Especie </label>
          <el-input
            name="medicalConditions"
            v-model="categoryForm.specie"
            type="text"
            placeholder="Ingrese Especie"
          />
        </div>
        <div class="col">
          <label for="specie" class="label-title"> Raza </label>
          <el-input
            name="medicalConditions"
            v-model="categoryForm.breed"
            type="text"
            placeholder="Ingrese Raza"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogCategory = false">Cancel</el-button>
        <el-button type="primary" @click="dialogCategory = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="dialogClient"
    title="Crear Cliente"
    width="30%"
    :before-close="handleClose"
  >
    <div>
      <h2>Todo ...</h2>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogClient = false">Cancel</el-button>
        <el-button type="primary" @click="dialogClient = false">
          Confirm
        </el-button>
      </span>
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
            v-model="petForm.healthInformation.medicalConditions"
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
              v-model="petForm.healthInformation.weight"
              :min="1"
              :max="250"
            />
          </div>
          <div class="col">
            <label for="height" class="label-title">Altura (Cm)</label>
            <el-input-number
              v-model="petForm.healthInformation.height"
              :min="1"
              :max="250"
            />
          </div>
          <div class="col">
            <label for="wingspan" class="label-title">Envergadura (Cm)</label>
            <el-input-number
              v-model="petForm.healthInformation.wingspan"
              :min="1"
              :max="250"
            />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogHealthInfo = false">Cancel</el-button>
        <el-button type="primary" @click="dialogHealthInfo = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
// import TableData from "@/modules/shared/components/TableUsers.vue";
export default {
  components: {
    // TableData,
  },
  data() {
    return {
      dialogCategory: false,
      dialogClient: false,
      dialogHealthInfo: false,
      genders: [
        { name: "Macho", value: "1" },
        { name: "Hembra", value: "0" },
      ],
      categories: [],
      clients: [],
      petForm: {
        name: "",
        bornYear: "",
        healthInformation: {
          medicalConditions: "",
          weight: "",
          height: "",
          wingspan: "",
        },
        behavior: {
          activityLevel: "",
          specificBehaviors: "",
        },
      },
      categoryForm: {
        classe: "",
        subclass: "",
        specie: "",
        breed: "",
      },
    };
  },
};
</script>

<style>
.label-title {
  font-size: 18px;
}
</style>
