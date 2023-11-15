import axios from "axios";

const animalServiceApi = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL_ANIMAL}/api`,
});

export default animalServiceApi;
