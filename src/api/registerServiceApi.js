import axios from "axios";

const registerServiceApi = axios.create({
  baseURL: "https://microservice-registration.azurewebsites.net/api/v1",
});

export default registerServiceApi;
