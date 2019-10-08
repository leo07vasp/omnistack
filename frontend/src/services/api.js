import axios from 'axios';

const api = axios.create({
  baseURL: 'https://node-api-express.herokuapp.com/'
});

export default api;
