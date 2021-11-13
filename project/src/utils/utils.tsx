import {AuthInfoType, FilmType, ServerAuthInfoType, ServerFilmType} from '../types/types';
import { GenreType } from '../types/state';
import { ALL_GENRES_ITEM, AuthorizationStatus, GENRES_NUMBER } from '../const';

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
  return [ALL_GENRES_ITEM as GenreType, ...new Set(genres)].slice(
    0,
    GENRES_NUMBER + 1,
  );
};

const isTrueString = (source: string): boolean => source === 'true';

export const isCheckedAuth = (
  authorizationStatus: AuthorizationStatus,
): boolean => authorizationStatus === AuthorizationStatus.Unknown;

const parseFilmFromServerFormat = (film: ServerFilmType): FilmType => ({
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
  isFavorite: isTrueString(film['is_favorite']),
});

const parseAuthInfoFromServerFormat = (AuthInfo: ServerAuthInfoType): AuthInfoType  => ({
  id: AuthInfo.id,
  email: AuthInfo.email,
  name: AuthInfo.name,
  avatarUrl: AuthInfo['avatar_url'],
  token: AuthInfo.token,
});

const rangeFilm = (rating: number) => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    default:
      return 'Awesome';
  }
};

const convertMinutesRepresentation = (minutesDuration: number) => {
  const hours = Math.floor(minutesDuration/60);
  const minutes = minutesDuration - hours * 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export {
  joinArrayByComma,
  filterFilmsByGenre,
  getGenres,
  isTrueString,
  parseFilmFromServerFormat,
  parseAuthInfoFromServerFormat,
  rangeFilm,
  convertMinutesRepresentation
};
