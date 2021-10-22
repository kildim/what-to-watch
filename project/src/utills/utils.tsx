import { FilmType, GenreType } from '../types/types';

const joinArrayByComma = (ingoingArray: string[]): string =>
  ingoingArray.join(',\n');

const filterFilmsByGenre = (
  ingoingArray: FilmType[],
  genre: GenreType,
): FilmType[] => ingoingArray.filter((film: FilmType) => film.genre === genre);

export { joinArrayByComma, filterFilmsByGenre };
