import {CommentType, FilmType} from './types';
import {AuthorizationStatus} from '../const';

export type GenreType = string;

export type StateType = {
  genre: string;
  films: FilmType[];
  genres: GenreType[];
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  promo: FilmType,
  film: FilmType,
  similarFilms: FilmType[],
  comments: CommentType[],
};
