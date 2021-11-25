import { CommentType, FilmType, UserInfoType } from '../types/types';
import {Action, AuthorizationStatus} from '../const';
import { GenreType } from '../types/state';
import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction(
  Action.SetGenre, (genre: string) =>
    ({
      type: Action.SetGenre,
      payload: genre,
    }),
);

export const loadFilms = createAction(
  Action.LoadFilms, (films: FilmType[]) => ({
    type: Action.LoadFilms,
    payload: {
      films: films,
    },
  }),
);

export const loadFavorites = createAction(
  Action.LoadFavorites, (films: FilmType[]) => ({
    type: Action.LoadFavorites,
    payload: films,
  }),
);

export const loadUserInfo = createAction(
  Action.LoadUserInfo, (userInfo: UserInfoType) => ({
    type: Action.LoadUserInfo,
    payload: userInfo,
  }),
);

export const setGenres = createAction(
  Action.SetGenres, (genres: GenreType[]) => ({
    type: Action.SetGenres,
    payload: {
      genres: genres,
    },
  }),
);

export const loadPromo = createAction(
  Action.LoadPromo, (promo: FilmType) => ({
    type: Action.LoadPromo,
    payload: {
      promo: promo,
    },
  }),
);

export const loadFilmComments = createAction(
  Action.LoadFilmComments, (comments: CommentType[]) => ({
    type: Action.LoadFilmComments,
    payload: comments,
  }),
);

export const loadSimilarFilms = createAction(
  Action.LoadSimilarFilms, (films: FilmType[]) => ({
    type: Action.LoadSimilarFilms,
    payload: {
      similarFilms: films,
    },
  }),
);

export const setIsFilmsDataLoading = createAction(
  Action.SetIsFilmsDataLoading, (isFilmsDataLoading: boolean) => ({
    type: Action.SetIsFilmsDataLoading,
    payload: isFilmsDataLoading,
  }),
);

export const setIsFavoritesLoading = createAction(
  Action.SetIsFavoritesLoading, (isFavoritesLoading: boolean) => ({
    type: Action.SetIsFavoritesLoading,
    payload: isFavoritesLoading,
  }),
);

export const setIsReviewPosting = createAction(
  Action.SetIsReviewPosting, (isReviewPosting: boolean) => ({
    type: Action.SetIsReviewPosting,
    payload: isReviewPosting,
  }),
);

export const setAuthorizationStatus = createAction(
  Action.SetAuthorizationStatus, (authStatus: AuthorizationStatus) => ({
    type: Action.SetAuthorizationStatus,
    payload: authStatus,
  }),
);

export const redirectToRoute = createAction(
  Action.RedirectToRoute, (url: string) => ({
    type: Action.RedirectToRoute,
    payload: url,
  }),
);
