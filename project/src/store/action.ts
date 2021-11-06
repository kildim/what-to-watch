import {CommentType, FilmType} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../const';
import {getGenres} from '../utils/utils';

export enum Action {
  SetGenre = 'film/setGenre',
  GetGenre = 'film/getGenreFilms',
  SetApi = 'data/setApi',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
  LoadFilm = 'data/loadFilm',
  LoadFilmComments = 'data/loadFilmComments',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  SetIsDataLoaded = 'user/setIsDataLoaded',
  SetAuthorizationStatus = 'user/setAuthorizationStatus',
  RedirectToRoute = 'game/redirectToRoute'
}

export const setGenre = (genre: string) => ({
  type: Action.SetGenre,
  payload: genre,
} as const);

export const getGenreFilms = (genre: string) => ({
  type: Action.GetGenre,
  payload: {
    genre,
  },
} as const);

export const loadFilms = (films: FilmType[]) => ({
  type: Action.LoadFilms,
  payload: {
    films: films,
    genres: getGenres(films),
  },
} as const);

export const loadPromo = (promo: FilmType) => ({
  type: Action.LoadPromo,
  payload: {
    promo: promo,
  },
} as const);

export const loadFilm = (film: FilmType) => ({
  type: Action.LoadFilm,
  payload: {
    film: film,
  },
} as const);

export const loadFilmComments = (comments: CommentType[]) => ({
  type: Action.LoadFilmComments,
  payload: comments,
} as const);

export const loadSimilarFilms = (films: FilmType[]) => ({
  type: Action.LoadSimilarFilms,
  payload: {
    similarFilms: films,
  },
} as const);

export const setIsDataLoaded = (isDataLoaded: boolean) => ({
  type: Action.SetIsDataLoaded,
  payload: isDataLoaded,
} as const);

export const setAuthorizationStatus = (authStatus: AuthorizationStatus) => ({
  type: Action.SetAuthorizationStatus,
  payload: authStatus,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: Action.RedirectToRoute,
  payload: url,
} as const);
