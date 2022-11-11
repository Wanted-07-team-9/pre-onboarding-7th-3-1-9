import instance from './axiosInstance';
import { ISicks } from '@types';
import axios, { AxiosError } from 'axios';

const URL_SICK = 'sick';

export const getSick = async (param: string): Promise<ISicks[]> => {
  if (param === '') return [];

  if ('caches' in window) {
    const payload = {
      sickNm_like: param,
    };
    const queryStr = new URLSearchParams(payload).toString();
    const cacheStorage = await caches.open(URL_SICK);
    const cachedResponse = await cacheStorage.match(queryStr);
    const cached = await cachedResponse?.json();
    
    const config = {
      headers: {
        'If-None-Match': (cached ? cached.etag : "")
      },
      params: payload,
    };

    try {
      const response = await instance.get(`/${URL_SICK}`, config);

      const customData = {
        etag: response.headers.etag,
        data: response.data
      }

      cacheStorage.put(queryStr, new Response(JSON.stringify(customData)));

      return response.data;
    }
    catch(error) {
      const err = error as AxiosError;
      if(axios.isAxiosError(err)) {
        console.error(err);
      }

      if(err.status === 304) {
        return cached.data;
      }
    }
  }

  return [];
};
