import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './reducers/auth-reducer/auth-reducer';
import {statusReducer} from './reducers/status-reducer/status-reducer';
import {dataReducer} from './reducers/data-reducer/data-reducer';

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
