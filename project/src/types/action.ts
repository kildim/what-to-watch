import {setGenre, getGenreFilms, loadFilms, requireAuthorization, requireLogout, loadPromo} from '../store/action';
import {Store, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StateType} from './state';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof getGenreFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadPromo>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, ActionType>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, ActionType>;

// export type DispatchType = (args: ActionType) => ActionType

// export type StoreType = Store<StateType, ActionType> & {
//   dispatch: ThunkAppDispatch
// }
export type StoreType = Store<StateType, ActionType> & {dispatch: ThunkDispatch<StateType, AxiosInstance, ActionType>}


