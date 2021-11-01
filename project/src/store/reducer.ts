import {StateType} from '../types/state';
import {ActionType} from '../types/action';
import {Action} from './action';
import {ALL_GENRES_ITEM, AuthorizationStatus} from '../const';

const initialState = {
  genre: ALL_GENRES_ITEM as string,
  films: [],
  genres: [ALL_GENRES_ITEM],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Action.SetGenre:
      return {...state, genre: action.payload};
    case Action.LoadFilms:
      return {...state, films: action.payload.films, genres: action.payload.genres};
    case Action.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case Action.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
