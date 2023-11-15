import registerServiceApi from "@/api/registerServiceApi";
import clientServiceApi from "@/api/clientServiceApi";
import animalServiceApi from "@/api/animalServiceApi";
import clinicServiceApi from "@/api/clinicServiceApi";

export const loginAction = async ({ commit }, credentiales) => {
  try {
    const data = await registerServiceApi.post("/auth/users", credentiales, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token, id_tenant } = data.data;
    if (!data) {
      commit("loginMutation", {}, "");
      return false;
    }
    commit("loginMutation", { token, id_tenant });
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("id_tenant", id_tenant);
    return true;
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async ({ commit }, idTenant) => {
  const { data } = await registerServiceApi.get(`/tenants/${idTenant}/users`, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
  if (!data) {
    commit("getAllUsers", []);
    return;
  }
  commit("getAllUsers", data);
};

export const createCliente = async ({ commit }, body) => {
  const resp = await clientServiceApi.post("/CreateClient", body);
  commit("addClient", resp);
  return resp;
};

export const getAllClients = async ({ commit }) => {
  const { data } = await clientServiceApi.get("/GetAllClients");
  if (!data) {
    commit("getAllClients", []);
    return;
  }
  commit("getAllClients", data);
};

export const createPet = async ({ commit }, body) => {
  const resp = await animalServiceApi.post(
    "/Animal/CreateAnimalFromBody",
    body
  );
  commit("createPet", resp);
  return resp;
};

export const getAllBehavior = async ({ commit }) => {
  const { data } = await animalServiceApi.get("/Behavior/ByBehaviorAll");
  if (!data) {
    commit("getAllBehavior", []);
    return;
  }
  commit("getAllBehavior", data);
};

export const getBehavior = async ({ commit }, idBehavior) => {
  const { data } = await animalServiceApi.get(
    `/api/Behavior/ByBehaviorId?id=${idBehavior}}`
  );
  commit("");
  return data;
};

export const getAllCategories = async ({ commit }) => {
  const { data } = await animalServiceApi.get("/Category/GetAllCategories");
  if (!data) {
    commit("getAllCategories", []);
    return;
  }
  commit("getAllCategories", data);
};

export const createHealthInformation = async ({ commit }, body) => {
  const { data } = await animalServiceApi.post(
    "/HealthInformation/CreateHealthInformationFromBody",
    body
  );
  commit("");
  console.log(data);
  return data;
};

export const createMedicalService = async ({ commit }, body) => {
  const { data } = await clinicServiceApi.post(
    "/MedicalService/AddMedicalServiceFromBody",
    body
  );
  commit("");
  return data;
};

export const createPetService = async ({ commit }, body) => {
  const { data } = await clinicServiceApi.post(
    "/MedicalService/AddMedicalServiceFromBody",
    body
  );
  commit("");
  return data;
};

export const getDataTable = async ({ commit }, idTenant) => {
  const { data } = await animalServiceApi.get(
    `/Animal/GetAnimalDetailsByTenant/${idTenant}`
  );
  if (!data) {
    commit("getDataTable", []);
    return;
  }
  commit("getDataTable", data);
};
