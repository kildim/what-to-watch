import {
  getGenreFilms, loadFavorites,
  loadFilm,
  loadFilmComments,
  loadFilms,
  loadSimilarFilms, loadUserInfo,
  redirectToRoute,
  setAuthorizationStatus,
  setGenre, setGenres, setIsFavoritesLoading,
  setIsFilmsDataLoading, setIsReviewPosting
} from '../store/action';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateType } from './state';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof setGenres>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadFilmComments>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof setIsFilmsDataLoading>
  | ReturnType<typeof setIsReviewPosting>
  | ReturnType<typeof loadUserInfo>
  | ReturnType<typeof loadFavorites>
  | ReturnType<typeof setIsFavoritesLoading>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  StateType,
  AxiosInstance,
  ActionType
>;

export type ThunkAppDispatch = ThunkDispatch<
  StateType,
  AxiosInstance,
  ActionType
>;
