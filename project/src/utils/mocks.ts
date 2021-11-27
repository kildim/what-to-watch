import { GenreType } from '../types/state';
import {CommentType, FilmType, UserInfoType} from '../types/types';
import * as faker from 'faker';
import { datatype, date } from 'faker';

const DEFAULT_COLOR = '#000000';
const STARRING: string[] = Array(6)
  .fill(null)
  .map(() => faker.name.findName());
const GENRES_MAX_COUNT = 5;

export const FAKE_GENRES: GenreType[] = Array(GENRES_MAX_COUNT)
  .fill(null)
  .map((_: null, index: number) => `genre_${index}`);

export const fakeFilms = (filmsCount: number): FilmType[] =>
  Array(filmsCount)
    .fill(null)
    .map((_, index: number) => ({
      id: index,
      name: faker.name.findName(),
      posterImage: faker.internet.url(),
      previewImage: faker.internet.url(),
      backgroundImage: faker.internet.url(),
      backgroundColor: DEFAULT_COLOR,
      videoLink: faker.internet.url(),
      previewVideoLink: faker.internet.url(),
      description: faker.lorem.words(10),
      rating: faker.datatype.number(10),
      scoresCount: faker.datatype.number(10),
      director: faker.name.findName(),
      starring: STARRING,
      runTime: datatype.number(),
      genre: FAKE_GENRES[faker.datatype.number(GENRES_MAX_COUNT - 1)],
      released: date.past().getFullYear(),
      isFavorite: datatype.boolean(),
    }));

export const fakeComments = (commentsCount: number): CommentType[] =>
  Array(commentsCount)
    .fill(null)
    .map((_, index: number) => ({
      id: index,
      user: {
        id: faker.datatype.number(),
        name: faker.name.findName(),
      },
      rating: faker.datatype.number(10),
      comment: faker.lorem.paragraph(),
      date: faker.date.past(),
    }));

export const fakeUser = (): UserInfoType => ({
  id: faker.datatype.number(),
  email: faker.internet.email(),
  name: faker.name.findName(),
  avatarUrl: faker.internet.url(),
});
