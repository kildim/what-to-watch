import {CommentType, FilmType, UserInfoType} from '../types/types';
import { AuthorizationStatus } from '../const';
import { GenreType } from '../types/state';

export enum Action {
  SetGenre = 'film/setGenre',
  GetGenre = 'film/getGenreFilms',
  SetGenres = 'film/setGenres',
  SetApi = 'data/setApi',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
  LoadFilm = 'data/loadFilm',
  LoadUserInfo = 'data/loadUserInfo',
  LoadFilmComments = 'data/loadFilmComments',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  SetIsFilmsDataLoading = 'user/setIsFilmsDataLoading',
  SetAuthorizationStatus = 'user/setAuthorizationStatus',
  SetIsReviewPosting = 'user/isReviewPosting',
  RedirectToRoute = 'game/redirectToRoute',
}

export const setGenre = (genre: string) =>
  ({
    type: Action.SetGenre,
    payload: genre,
  } as const);

export const getGenreFilms = (genre: string) =>
  ({
    type: Action.GetGenre,
    payload: {
      genre,
    },
  } as const);

export const loadFilms = (films: FilmType[]) =>
  ({
    type: Action.LoadFilms,
    payload: {
      films: films,
    },
  } as const);

export const loadUserInfo = (userInfo: UserInfoType) =>
  ({
    type: Action.LoadUserInfo,
    payload: userInfo,
  } as const);

export const setGenres = (genres: GenreType[]) =>
  ({
    type: Action.SetGenres,
    payload: {
      genres: genres,
    },
  } as const);

export const loadPromo = (promo: FilmType) =>
  ({
    type: Action.LoadPromo,
    payload: {
      promo: promo,
    },
  } as const);

export const loadFilm = (film: FilmType) =>
  ({
    type: Action.LoadFilm,
    payload: {
      film: film,
    },
  } as const);

export const loadFilmComments = (comments: CommentType[]) =>
  ({
    type: Action.LoadFilmComments,
    payload: comments,
  } as const);

export const loadSimilarFilms = (films: FilmType[]) =>
  ({
    type: Action.LoadSimilarFilms,
    payload: {
      similarFilms: films,
    },
  } as const);

export const setIsFilmsDataLoading = (isFilmsDataLoading: boolean) =>
  ({
    type: Action.SetIsFilmsDataLoading,
    payload: isFilmsDataLoading,
  } as const);

export const setIsReviewPosting = (isReviewPosting: boolean) =>
  ({
    type: Action.SetIsReviewPosting,
    payload: isReviewPosting,
  } as const)


export const setAuthorizationStatus = (authStatus: AuthorizationStatus) =>
  ({
    type: Action.SetAuthorizationStatus,
    payload: authStatus,
  } as const);

export const redirectToRoute = (url: string) =>
  ({
    type: Action.RedirectToRoute,
    payload: url,
  } as const);

