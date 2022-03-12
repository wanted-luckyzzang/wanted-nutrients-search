import axios from "axios";

const BASE_URL = "https://nutri-search.herokuapp.com";

export const getApi = () => {
  return axios.get(`${BASE_URL}/data`);
};
