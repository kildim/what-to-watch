export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Movie = '/films/:id',
  Review = '/films/:id/review',
  MyList = '/my-list',
  Player = '/player/:id',
  Favorites = '/favorites'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
