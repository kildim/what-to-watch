import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { StateType } from '../../types/state';
import { Action } from '../action';

export const redirect: Middleware<unknown, StateType> =
  (_store) => (next) => (action) => {
    if (action.type === Action.RedirectToRoute) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
