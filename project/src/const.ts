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
  Page404 = '/page404',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  PostComment = '/comments/:id',
  Favorites = '/favorite',
  FavoriteStatus = '/favorite/:film_id/:status'
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

export const TOAST_MESSAGE = {
  AUTH_SUGGESTION: 'Предлягаем Авторизоваться',
  POST_ERROR: 'Ошибка при публикации на сервере',
  FETCH_FILMS_ERROR: 'Возникла ошибка при загрузке фильмов',
  FETCH_FAVORITES_ERROR_MESSAGE: 'Возникла ошибка при загрузке избранных фильмов',
  FETCH_SIMILAR_ERROR_MESSAGE: 'Возникла ошибка при загрузке похожих фильмов',
  FETCH_COMMENTS_ERROR_MESSAGE: 'Возникла ошибка при загрузке комментариев',
  POST_LOGIN_ACTION_ERROR_MESSAGE: 'Возникла ошибка при отправке параметров аутентификации',
  POST_SET_FAVORITE_ERROR_MESSAGE: 'Возникла ошибка при внесении в список избранного',
};

