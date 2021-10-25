import {films} from '../mocks/films';
import {StateType} from '../types/state';
import {ActionType} from '../types/action';
import {Action} from './action';
import {getGenres} from '../utills/utils';

const initialState: StateType = {
  genre: 'all',

  //TODO стэйт films грузить с сервера и генерировать genres на основе films используя getGenres()
  films: films,
  genres: getGenres(films),
};

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Action.SetGenre:
      return {...state, genre: action.payload.genre};
    default:
      return state;
  }
};

export {reducer};
