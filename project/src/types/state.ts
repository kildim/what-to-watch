import {CommentType, FilmType, UserInfoType} from './types';
import {AuthorizationStatus} from '../const';

export type GenreType = string;

export type StateType = {
  genre: string;
  films: FilmType[];
  genres: GenreType[];
  authorizationStatus: AuthorizationStatus,
  isFilmsDataLoading: boolean,
  isReviewPosting: boolean,
  film: FilmType,
  similarFilms: FilmType[],
  comments: CommentType[],
  userInfo: UserInfoType,
  favorites: FilmType[],
  isFavoritesLoading: boolean,
};
