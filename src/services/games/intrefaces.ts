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
