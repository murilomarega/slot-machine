import { IGame } from './intrefaces';
import apiService from '../config';

const searchGamebyName = (searchValue: string) => {
  return apiService
    .get<IGame[]>('/api/games', { params: { gameName: searchValue } })
    .then((res) => res.data);
};

export { searchGamebyName };