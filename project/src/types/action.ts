import {setGenre, getGenreFilms, loadFilms, requireAuthorization, requireLogout} from '../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StateType} from './state';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, ActionType>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, ActionType>;

