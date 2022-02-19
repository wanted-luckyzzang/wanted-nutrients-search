import axios from 'axios';

export const getApi = () => {
  return axios.get('https://wanted-nutrisearch.herokuapp.com/data');
};
