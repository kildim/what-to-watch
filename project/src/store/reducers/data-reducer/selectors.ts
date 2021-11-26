import { GenreType, StateType } from '../../../types/state';
import { NameSpace } from '../../root-reducer';
import { CommentType, FilmType, UserInfoType } from '../../../types/types';
import {createSelector} from 'reselect';
import {filterFilmsByGenre} from '../../../utils/utils';

export const getFilms = (state: StateType): FilmType[] =>
  state[NameSpace.Data].films;
export const getGenre = (state: StateType): string =>
  state[NameSpace.Data].genre;
export const getGenres = (state: StateType): GenreType[] =>
  state[NameSpace.Data].genres;
export const getPromo = (state: StateType): FilmType =>
  state[NameSpace.Data].promo;
export const getSimilarFilms = (state: StateType): FilmType[] =>
  state[NameSpace.Data].similarFilms;
export const getComments = (state: StateType): CommentType[] =>
  state[NameSpace.Data].comments;
export const getUserInfo = (state: StateType): UserInfoType =>
  state[NameSpace.Data].userInfo;
export const getFavorites = (state: StateType): FilmType[] =>
  state[NameSpace.Data].favorites;
export const getFilmsByGenre = createSelector(getFilms, getGenre, filterFilmsByGenre );
