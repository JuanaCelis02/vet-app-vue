import axios from "axios";

const clinicServiceApi = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL_CLINIC}/api`,
});

export default clinicServiceApi;
