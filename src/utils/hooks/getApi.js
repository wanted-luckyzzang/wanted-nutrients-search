import axios from 'axios';

export const getApi = () => {
  return axios.get('https://wanted-nutrisearch.netlify.app/data');
};
