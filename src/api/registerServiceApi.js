import axios from "axios";

const registerServiceApi = axios.create({
  // baseURL: "http://localhost:3000/api/v1",
  baseURL: "https://microservice-register-w3antys34q-uc.a.run.app/api/v1",
});

export default registerServiceApi;
