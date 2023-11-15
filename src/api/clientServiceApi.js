import axios from "axios";

const clientServiceApi = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL_CLIENT}/api/Client`,
});

export default clientServiceApi;
