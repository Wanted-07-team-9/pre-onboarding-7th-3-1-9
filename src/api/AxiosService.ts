import { instance } from './ApiInstance';
import { sickData } from '../redux/reducer/searchSlice';

const END_POINT = 'sick';
export const AxiosService = {
  getCashSearch: async (param: string): Promise<sickData[]> => {
    if (param === '') return [];

    if ('caches' in window) {
      const query = {
        sickNm_like: param,
      };

      const queryStr = new URLSearchParams(query).toString();
      const cashStorage = await caches.open(END_POINT);
      const cashedResponse = await cashStorage.match(queryStr);

      try {
        const config = {
          params: query,
        };

        const { data } = await instance.get(`/${END_POINT}`, config);
        console.info('calling api');
        cashStorage.put(`${param}`, new Response(JSON.stringify(data)));
        return data;
      } catch (error) {
        alert(error);
      }
      const newCached = await cashedResponse?.json();
      return newCached;
    }
    return [];
  },
};
