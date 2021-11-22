import { GenreType, StateType } from '../../../types/state';
import { NameSpace } from '../../root-reducer';
import { CommentType, FilmType, UserInfoType } from '../../../types/types';

export const getFilms = (state: StateType): FilmType[] =>
  state[NameSpace.data].films;
export const getGenres = (state: StateType): GenreType[] =>
  state[NameSpace.data].genres;
export const getFilm = (state: StateType): FilmType =>
  <FilmType>state[NameSpace.data].film;
export const getSimilarFilms = (state: StateType): FilmType[] =>
  state[NameSpace.data].similarFilms;
export const getComments = (state: StateType): CommentType[] =>
  state[NameSpace.data].comments;
export const getUserInfo = (state: StateType): UserInfoType =>
  <UserInfoType>state[NameSpace.data].userInfo;
export const getFavorites = (state: StateType): FilmType[] =>
  state[NameSpace.data].favorites;
