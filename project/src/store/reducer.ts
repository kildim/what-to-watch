import { StateType } from '../types/state';
import { ActionType } from '../types/action';
import {Action, ALL_GENRES_ITEM, AuthorizationStatus} from '../const';

const initialState: StateType = {
  genre: ALL_GENRES_ITEM as string,
  films: [],
  genres: [ALL_GENRES_ITEM],
  // authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  isReviewPosting: false,
  film: null,
  similarFilms: [],
  comments: [],
  userInfo: null,
  favorites: [],
  isFavoritesLoading: false,
};

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Action.SetGenre:
      return {...state, genre: action.payload};
    case Action.LoadFilms:
      return {...state, films: action.payload.films};
    case Action.SetGenres:
      return {...state, genres: action.payload.genres};
    case Action.LoadSimilarFilms:
      return {...state, similarFilms: action.payload.similarFilms};
    case Action.LoadFilm:
      return {...state, film: action.payload.film};
    case Action.LoadFavorites:
      return {...state, favorites: action.payload};
    case Action.LoadFilmComments:
      return {...state, comments: action.payload};
    // case Action.SetAuthorizationStatus:
    //   return {...state, authorizationStatus: action.payload};
    case Action.SetIsFilmsDataLoading:
      return {...state, isFilmsDataLoading: action.payload};
    case Action.SetIsReviewPosting:
      return {...state, isReviewPosting: action.payload};
    case Action.SetIsFavoritesLoading:
      return {...state, isFavoritesLoading: action.payload};
    case Action.LoadUserInfo:
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
};

export {reducer};
