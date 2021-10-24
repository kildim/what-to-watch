import {films} from '../mocks/films';
import {StateType} from '../types/state';
import {ActionType} from '../types/action';
import {Action} from './action';

const initialState = {
  genre: 'all',
  films: films,
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
