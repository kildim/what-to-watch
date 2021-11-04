import {FilmType} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../const';
import {getGenres} from '../utils/utils';

export enum Action {
  SetGenre = 'film/setGenre',
  GetGenre = 'film/getGenreFilms',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
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
