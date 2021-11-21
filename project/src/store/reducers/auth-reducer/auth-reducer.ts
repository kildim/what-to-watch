import {AuthorizationStatus} from '../../../const';
import {AuthReducerType} from '../../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {setAuthorizationStatus} from '../../action';

const initialState: AuthReducerType = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {authReducer};
