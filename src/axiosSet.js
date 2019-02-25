import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio-2227a.firebaseio.com/'
});

export default instance;