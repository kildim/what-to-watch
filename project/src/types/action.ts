import {
  getGenreFilms,
  loadFilm,
  loadFilmComments,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setAuthorizationStatus,
  setGenre,
  setIsDataLoaded
} from '../store/action';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateType } from './state';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadFilmComments>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setIsDataLoaded>;

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
