import axios from 'axios';

export const getApi = () => {
  return axios.get('https://nutri-search.herokuapp.com//data');
};
