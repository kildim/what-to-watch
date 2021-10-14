export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Movie = '/films/:id',
  Review = '/films/:id/review',
  MyList = '/my-list',
  Player = '/player/:id',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const UNEXISTENT_FILM = {
  id: null,
  name: 'FILM NOT FOUND',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/seven-years-in-tibet.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink:
    'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink:
    'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'FILM NOT FOUND',
  rating: 8.9,
  scoresCount: 240,
  director: 'FILM NOT FOUND',
  starring: ['FILM NOT FOUND'],
  runTime: 0,
  genre: 'FILM NOT FOUND',
  released: 0,
  isFavorite: false,
};
