export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Film = '/films/:id',
  MyList = '/my-list',
  Player = '/player/:id',
  Favorites = '/favorites',
  Overview = '/films/:id/overview',
  Reviews = '/films/:id/reviews',
  Details = '/films/:id/details',
  Similar = '/films/:id/similar',
  AddReview = '/films/:id/review',
  Comments = '/comments/:id',
  Page404 = '/404'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  PostComment = '/comments/:id',
  Favorites = '/favorite'
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

export const EMPTY_USER_INFO = {
  id: -1,
  email: '',
  name: '',
  avatarUrl: '',
};

export const ALL_GENRES_ITEM = 'All genres';
export const GENRES_NUMBER = 9;

