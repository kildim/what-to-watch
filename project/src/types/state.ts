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
  film: FilmType | null,
  similarFilms: FilmType[],
  comments: CommentType[],
  userInfo: UserInfoType | null,
  favorites: FilmType[],
  isFavoritesLoading: boolean,
};
