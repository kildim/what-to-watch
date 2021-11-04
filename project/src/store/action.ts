import {FilmType} from '../types/types';
import {AppRoute, AuthorizationStatus} from '../const';
import {getGenres} from '../utils/utils';

export enum Action {
  SetGenre = 'film/setGenre',
  GetGenre = 'film/getGenreFilms',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
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

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: Action.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: Action.RequireLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: Action.RedirectToRoute,
  payload: url,
} as const);
