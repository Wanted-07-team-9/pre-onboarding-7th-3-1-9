import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});

instance.interceptors.request.use(
  async config => {
    console.info('calling api');
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default instance;
