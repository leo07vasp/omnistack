import axios from 'axios';

const api = axios.create({
  baseURL: 'https://node-api-express.herokuapp.com/'
  // baseURL: 'http://10.1.0.238:3333'
});

export default api;
