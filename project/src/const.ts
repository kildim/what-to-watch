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

export enum Action {
  SetGenre = 'genre/setGenre',
  SetGenres = 'genre/setGenres',

  SetApi = 'data/setApi',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  LoadFilmComments = 'data/loadFilmComments',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadFavorites = 'data/loadFavorites',
  RedirectToRoute = 'data/redirectToRoute',
  SetIsFavoritesLoading = 'data/setIsFavoritesLoading',
  SetIsFilmsDataLoading = 'data/setIsFilmsDataLoading',
  SetIsReviewPosting = 'data/isReviewPosting',
  LoadUserInfo = 'data/loadUserInfo',

  SetAuthorizationStatus = 'user/setAuthorizationStatus',
}

export const ALL_GENRES_ITEM = 'All genres';
export const GENRES_NUMBER = 9;

export const ToastMessage = {
  AuthSuggestion: 'Предлягаем Авторизоваться',
  PostError: 'Ошибка при публикации на сервере',
  FetchFilmsError: 'Возникла ошибка при загрузке фильмов',
  FetchFavoritesErrorMessage: 'Возникла ошибка при загрузке избранных фильмов',
  FetchSimilarErrorMessage: 'Возникла ошибка при загрузке похожих фильмов',
  FetchCommentsErrorMessage: 'Возникла ошибка при загрузке комментариев',
  PostLoginActionErrorMessage: 'Возникла ошибка при отправке параметров аутентификации',
  PostSetFavoriteErrorMessage: 'Возникла ошибка при внесении в список избранного',
};

