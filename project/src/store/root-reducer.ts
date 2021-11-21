import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './reducers/auth-reducer/auth-reducer';

export enum NameSpace {
  auth = 'AUTH',
  data = 'DATA',
  status = 'STATUS'
}

export const rootReducer = combineReducers({
  [NameSpace.auth]: authReducer,
  [NameSpace.data]: dataReducer,
  [NameSpace.status]: statusReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
