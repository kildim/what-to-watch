import { FilmType } from './types';

export type GenreType = string;

export type StateType = {
  genre: string;
  films: FilmType[];
  genres: GenreType[];
};
