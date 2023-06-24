import apiService from '../config';
import { IReel } from './interfaces';

const getReels = () => {
  return apiService.get<IReel[]>('/api/reels').then((res) => res.data);
};

export { getReels };
