import {films} from '../mocks/films';
import {StateType} from '../types/state';
import {ActionType} from '../types/action';
import {Action} from './action';
import {getGenres} from '../utills/utils';
import {ALL_GENRES_ITEM} from '../const';

const initialState = {
  genre: ALL_GENRES_ITEM as string,
  films: films,
  genres: getGenres(films),
};

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Action.SetGenre:
      return {...state, genre: action.payload};
    default:
      return state;
  }
};

export {reducer};
