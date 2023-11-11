import registerServiceApi from "@/api/registerServiceApi";

export const loginAction = async ({ commit }, credentiales) => {
  try {
    const data = await registerServiceApi.post("/auth/users", credentiales, {
      headers: {
        "Content-Type": "application/json", // Configura el encabezado Content-Type
        Accept: "*/*",
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
