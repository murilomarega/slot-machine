import { IGame } from '../../services/games/intrefaces';

interface ISearchGame {
  searchGameValue: string;
  setGamesList: (games: IGame[]) => void; // eslint-disable-line no-unused-vars
  setSearchGameValue: (value: string) => void; // eslint-disable-line no-unused-vars
}

export type { ISearchGame };
