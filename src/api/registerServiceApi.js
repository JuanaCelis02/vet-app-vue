import axios from "axios";

const registerServiceApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default registerServiceApi;
