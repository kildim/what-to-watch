import {FilmType} from '../types/types';
import {GenreType} from '../types/state';
import {ALL_GENRES_ITEM, AuthorizationStatus, GENRES_NUMBER} from '../const';

const joinArrayByComma = (ingoingArray: string[]): string =>
  ingoingArray.join(',\n');

const filterFilmsByGenre = (
  ingoingArray: FilmType[],
  genre: string,
): FilmType[] =>
  ingoingArray.filter((film: FilmType) =>
    genre === ALL_GENRES_ITEM ? true : film.genre === genre,
  );

const getGenres = (films: FilmType[]): GenreType[] => {
  const genres = films.map((film) => film.genre);
  return [ALL_GENRES_ITEM as GenreType, ...new Set(genres)].slice(0, GENRES_NUMBER + 1);
};

const stringToBoolean = (source: string) => (source === 'true');

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export {joinArrayByComma, filterFilmsByGenre, getGenres, stringToBoolean};
