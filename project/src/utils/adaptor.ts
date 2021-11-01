import {stringToBoolean} from './utils';
import {Action} from '../store/action';
import {Dispatch} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {FilmType} from '../types/types';

export type ServerFilmType = {
  id: string,
  name: string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  description: string,
  rating: string,
  'scores_count': string,
  director: string,
  starring: string [],
  'run_time': string,
  genre: string,
  released: number,
  'is_favorite': string,
}

const parseFilmsFromServer = (films: ServerFilmType[]): FilmType[] => films.map((film: ServerFilmType) => ({
  id: Number(film['id']),
  name: film['name'],
  posterImage: film['poster_image'],
  previewImage: film['preview_image'],
  backgroundImage: film['background_image'],
  backgroundColor: film['background_color'],
  videoLink: film['video_link'],
  previewVideoLink: film['preview_video_link'],
  description: film['description'],
  rating: Number(film['rating']),
  scoresCount: Number(film['scores_count']),
  director: film['director'],
  starring: film['starring'],
  runTime: Number(film['run_time']),
  genre: film['genre'],
  released: film['released'],
  isFavorite: stringToBoolean(film['is_favorite']),
}));

const parseFilms = (store: any) => (nextDispatch: Dispatch) => (action: ActionType) => {
//Не понимаю какой тайпинг указать для `store`, any?

  if (action.type === Action.LoadFilms) {
    const films = parseFilmsFromServer(action.payload.films as unknown as ServerFilmType[]);
    //Указать тайпинг `as unknown` это норм?

    const payload = { ...action.payload, films: films};
    action = {...action, payload: payload};
  }

  return nextDispatch(action);
};

export {parseFilms, parseFilmsFromServer};
