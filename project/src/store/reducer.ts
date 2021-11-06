import { StateType } from '../types/state';
import { ActionType } from '../types/action';
import { Action } from './action';
import { ALL_GENRES_ITEM, AuthorizationStatus, EMPTY_FILM } from '../const';

const initialState: StateType = {
  genre: ALL_GENRES_ITEM as string,
  films: [],
  genres: [ALL_GENRES_ITEM],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  promo: EMPTY_FILM,
  film: EMPTY_FILM,
  similarFilms: [],
  comments: [],
};

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Action.SetGenre:
      return {...state, genre: action.payload};
    case Action.LoadFilms:
      return {...state, films: action.payload.films, genres: action.payload.genres};
    case Action.LoadSimilarFilms:
      return {...state, similarFilms: action.payload.similarFilms};
    case Action.LoadPromo:
      return {...state, promo: action.payload.promo};
    case Action.LoadFilm:
      return {...state, film: action.payload.film};
    case Action.LoadFilmComments:
      return {...state, comments: action.payload};
    case Action.SetAuthorizationStatus:
      return {...state, authorizationStatus: action.payload};
    case Action.SetIsDataLoaded:
      return {...state, isDataLoaded: action.payload};
    default:
      return state;
  }
};

export {reducer};
