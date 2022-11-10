import { HttpClient } from '../api/HttpService';
import { SearchService } from '../service/SearchService';
import { clearCacheData } from './cache';

const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

const checkExpiration = () => {
  const nowTime = Date.now();
  const prevAcces = localStorage.getItem('accessTime');
  if (prevAcces) {
    nowTime - parseInt(prevAcces) > CACHE_EXPIRATION && clearCacheData();
    return;
  }
  localStorage.setItem('accessTime', nowTime.toString());
};

export default function init() {
  checkExpiration();

  const httpClient = new HttpClient('http://localhost:4000/');
  const serarchService = new SearchService(httpClient, 'sick');
  return { serarchService };
}