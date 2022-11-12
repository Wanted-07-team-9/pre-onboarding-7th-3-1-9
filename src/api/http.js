import instance from './axiosInstance';
import axios from 'axios';
import { setCacheStorage, getCacheStorage } from '../utils/cacheStorage';

const URL_SICK = 'sick';

export const getSick = async param => {
  if (param === '') return [];
  if ('caches' in window) {
    const config = {
      params: {
        sickNm_like: param,
      },
    };
    const cached = await getCacheStorage(config);
    if (cached) return cached.data;

    try {
      const response = await instance.get(`/${URL_SICK}`, config);
      await setCacheStorage(config, response);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err);
        return;
      }
    }
  }
  return [];
};
