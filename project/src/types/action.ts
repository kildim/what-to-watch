import {
  setGenre,
  getGenreFilms,
  loadFilms,
  loadPromo,
  redirectToRoute, setAuthorizationStatus, setIsDataLoaded
} from '../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StateType} from './state';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setAuthorizationStatus>
  | ReturnType<typeof setIsDataLoaded>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, ActionType>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, ActionType>;



