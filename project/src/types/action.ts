import {setGenre, getGenreFilms} from '../store/action';

export type ActionType =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof getGenreFilms>;
