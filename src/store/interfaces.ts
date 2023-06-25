type TRequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface IThumb {
  url: string;
}

export interface IGame {
  id: string;
  slug: string;
  title: string;
  providerName: string;
  thumb: IThumb;
}

interface IReel {
  reels: string[];
}

interface IPlay {
  uuid: string;
  sortedFruits: string[];
  isWin: boolean;
  creditsEarned: number;
}

interface IWins {
  winWithTwoFruits: number;
  winWithThreeFruits: number;
}

interface IWinsKeyValues {
  [key: string]: IWins;
}

export type { IPlay, IReel, TRequestStatus, IWinsKeyValues };
