import {FilmType} from '../types/types';
import {AuthorizationStatus} from '../const';

export enum Action {
  SetGenre = 'film/setGenre',
  GetGenre = 'film/getGenreFilms',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
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
  payload: films,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: Action.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: Action.RequireLogout,
} as const);
