import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://json-server-beryl.vercel.app/api',
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
