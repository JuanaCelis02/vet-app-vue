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

export const addClient = (state, client) => {
  state.clients = [...state.clients, client];
};

export const getAllClients = (state, clients) => {
  state.clients = [...clients];
};

export const createPet = (state, pet) => {
  state.animals = [...state.animals, pet];
};

export const getAllBehavior = (state, behaviors) => {
  state.behaviors = [...behaviors];
};

export const getAllCategories = (state, categories) => {
  state.categories = [...categories];
};

export const getDataTable = (state, data) => {
  state.tableDate = [...data];
};
