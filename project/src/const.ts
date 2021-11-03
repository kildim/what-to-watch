export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Film = '/films/:id',
  Review = '/films/:id/review',
  MyList = '/my-list',
  Player = '/player/:id',
  Favorites = '/favorites',
  Overview = '/films/:id/overview',
  Reviews = '/films/:id/reviews',
  Details = '/films/:id/details',
  Similar = '/films/:id/similar',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const EMPTY_FILM = {
  id: -1,
  name: 'UNKNOWN',
  posterImage: 'UNKNOWN',
  previewImage: 'UNKNOWN',
  backgroundImage: 'UNKNOWN',
  backgroundColor: 'UNKNOWN',
  videoLink: 'UNKNOWN',
  previewVideoLink: 'UNKNOWN',
  description: 'UNKNOWN',
  rating: -1,
  scoresCount: 0,
  director: 'UNKNOWN',
  starring: ['UNKNOWN'],
  runTime: 0,
  genre: 'UNKNOWN',
  released: 0,
  isFavorite: false,
};

export const ALL_GENRES_ITEM = 'All genres';
export const GENRES_NUMBER = 9;

