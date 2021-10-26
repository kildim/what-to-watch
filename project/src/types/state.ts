import { FilmType } from './types';

export type GenreType = {
  dataLabel: string;
  genre: string;
};

export type StateType = {
  genre: string;
  films: FilmType[];
  genres: GenreType[];
};
