import instance from './axiosInstance';
import axios from 'axios';

const URL_SICK = 'sick';

export const getSick = async param => {
  if (param === '') return [];
  console.log('caches' in window);
  if ('caches' in window) {
    const config = {
      params: {
        sickNm_like: param,
      },
    };
    try {
      const response = await instance.get(`/${URL_SICK}`, config);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err);
      }
    }
  }
  return [];
};
