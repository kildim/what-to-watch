import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './reducers/auth-reducer/auth-reducer';
import {statusReducer} from './reducers/status-reducer/status-reducer';
import {dataReducer} from './reducers/data-reducer/data-reducer';

export enum NameSpace {
  Auth = 'AUTH',
  Data = 'DATA',
  Status = 'STATUS'
}

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authReducer,
  [NameSpace.Data]: dataReducer,
  [NameSpace.Status]: statusReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
