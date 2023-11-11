export const loginMutation = (state, data) => {
  const { token, id_tenant } = data;
  state.token = token;
  state.IdTenant = id_tenant;
};

export const getAllUsers = (state, data) => {
  state.users = data;
};

export const logOut = (state) => {
  state.token = "";
};
