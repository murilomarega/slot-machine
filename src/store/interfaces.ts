type TRequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface IThumb {
  url: string;
}

export interface IGame {
  id: string;
  slug: string;
  title: string;
  providerName: string;
  thumb: {
    url: IThumb;
  };
}

interface IReel {
  reels: string[];
}

interface IPlay {
  play: string[];
}

interface IPlayHistory {
  playHistory: IPlay[];
}

export type { IReel, IPlayHistory };

export type { TRequestStatus };
