import axios from 'axios';

export const getApi = () => {
  return axios.get('http://localhost:8000/data');
};
