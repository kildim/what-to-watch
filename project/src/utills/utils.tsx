import { FilmType } from '../types/types';
import {Constant} from '../const';
import {GenreType} from '../types/state';

const joinArrayByComma = (ingoingArray: string[]): string =>
  ingoingArray.join(',\n');

const filterFilmsByGenre = (
  ingoingArray: FilmType[],
  genre: string,
): FilmType[] => ingoingArray.filter((film: FilmType) => genre === Constant.AllGenresItem ? true : film.genre === genre);

const getGenres = (films: FilmType[]): GenreType [] => {
  const genres = films.map((film) => film.genre).slice(0,Constant.GenresNumber);
  genres.unshift(Constant.AllGenresItem);
  return [...new Set(genres)].map((genre: string) => ({dataLabel: toKebabCase(genre), genre: genre}));
};

const toKebabCase = (str: string):string  => {
  const someVariable =  str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  if (someVariable === null) {
    return '';
  }
  return someVariable.map((x) => x.toLowerCase()).join('-');
};

export { joinArrayByComma, filterFilmsByGenre, getGenres, toKebabCase };
