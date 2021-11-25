import {CommentType, FilmType, UserInfoType} from './types';
import {AuthorizationStatus} from '../const';
import {RootReducerType} from '../store/root-reducer';

export type GenreType = string;

export type AuthReducerType = {
  authorizationStatus: AuthorizationStatus,
}

export type DataReducerType = {
  genre: string;
  films: FilmType[];
  genres: GenreType[];
  promo: FilmType | null,
  similarFilms: FilmType[],
  comments: CommentType[],
  userInfo: UserInfoType | null,
  favorites: FilmType[],
}

export type StatusReducerType = {
  isFilmsDataLoading: boolean,
  isReviewPosting: boolean,
  isFavoritesLoading: boolean,
}

export type StateType = RootReducerType;
