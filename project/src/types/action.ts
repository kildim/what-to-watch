import {Action, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { StateType } from './state';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  StateType,
  AxiosInstance,
  Action
>;

export type ThunkAppDispatch = ThunkDispatch<
  StateType,
  AxiosInstance,
  Action
>;
