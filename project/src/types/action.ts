import {
  setGenre,
  getGenreFilms,
  loadFilms,
  requireAuthorization,
  requireLogout,
  loadPromo,
  redirectToRoute
} from '../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StateType} from './state';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof redirectToRoute>;;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, ActionType>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, ActionType>;



