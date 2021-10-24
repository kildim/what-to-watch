import {GenreType} from '../types/types';

export enum Action {
  SetGenre = 'film/setGenre',
  GetGenreFilms = 'film/getGenreFilms',
}

export const setGenre = (genre: GenreType) => ({
  type: Action.SetGenre,
  payload: {
    genre,
  },
} as const);

export const getGenreFilms = (genre: GenreType) => ({
  type: Action.GetGenreFilms,
  payload: {
    genre,
  },
} as const);
