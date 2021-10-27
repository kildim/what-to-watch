import { FilmType } from '../types/types';
import { Constant } from '../const';
import { GenreType } from '../types/state';

const joinArrayByComma = (ingoingArray: string[]): string =>
  ingoingArray.join(',\n');

const filterFilmsByGenre = (
  ingoingArray: FilmType[],
  genre: string,
): FilmType[] =>
  ingoingArray.filter((film: FilmType) =>
    genre === Constant.AllGenresItem ? true : film.genre === genre,
  );

const getGenres = (films: FilmType[]): GenreType[] => {
  const genres = films
    .map((film) => film.genre)
    .slice(0, Constant.GenresNumber);
  return [Constant.AllGenresItem as GenreType, ...new Set(genres)];
};

export { joinArrayByComma, filterFilmsByGenre, getGenres };
