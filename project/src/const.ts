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
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ALL_GENRES_ITEM = 'All genres';
export const GENRES_NUMBER = 9;

