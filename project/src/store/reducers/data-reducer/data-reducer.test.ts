import {fakeFilms, FAKE_GENRES, fakeComments, fakeUser} from '../../../utils/mocks';
import {
  loadFavorites,
  loadFilmComments,
  loadFilms,
  loadPromo,
  loadSimilarFilms, loadUserInfo,
  setGenre,
  setGenres
} from '../../action';
import {dataReducer} from './data-reducer';
import {DataReducerType} from '../../../types/state';
import {ALL_GENRES_ITEM} from '../../../const';

const FAKE_STATE: DataReducerType = {
  genre: ALL_GENRES_ITEM as string,
  films: [],
  genres: [ALL_GENRES_ITEM],
  promo: null,
  similarFilms: [],
  comments: [],
  userInfo: null,
  favorites: [],
};
const MAX_FILMS_COUNT = 5;

const FAKE_FILMS = fakeFilms(MAX_FILMS_COUNT);
const FAKE_PROMO = FAKE_FILMS[0];
const FAKE_COMMENTS = fakeComments(3);
const FAKE_USER = fakeUser();

describe('Data-reducer tests:', () => {
  describe('test setGenre action', () => {
    it('changes genre', () => {
      const INITIAL_GENRE = FAKE_GENRES[0];
      const INITIAL_STATE = {...FAKE_STATE,genre: INITIAL_GENRE};
      const RESULT_GENRE = FAKE_GENRES[1];
      const ACTION = setGenre(RESULT_GENRE);
      const RESULT_STATE = {...FAKE_STATE, genre: RESULT_GENRE};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test loadFilms action', () => {
    it('loads films', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = loadFilms(FAKE_FILMS);
      const RESULT_STATE = {...INITIAL_STATE, films: FAKE_FILMS};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test setGenres action', () => {
    it('set genres', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = setGenres(FAKE_GENRES);
      const RESULT_STATE = {...INITIAL_STATE, genres: FAKE_GENRES};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test loadSimilarFilms action', () => {
    it('set similarFilms', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = loadSimilarFilms(FAKE_FILMS);
      const RESULT_STATE = {...INITIAL_STATE, similarFilms: FAKE_FILMS};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test loadPromo action', () => {
    it('set promo', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = loadPromo(FAKE_PROMO);
      const RESULT_STATE = {...INITIAL_STATE, promo: FAKE_PROMO};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test loadFavorites action', () => {
    it('set favorites', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = loadFavorites(FAKE_FILMS);
      const RESULT_STATE = {...INITIAL_STATE, favorites: FAKE_FILMS};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test loadFilmComments action', () => {
    it('set comments', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = loadFilmComments(FAKE_COMMENTS);
      const RESULT_STATE = {...INITIAL_STATE, comments: FAKE_COMMENTS};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('test loadUserInfo action', () => {
    it('set user info', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = loadUserInfo(FAKE_USER);
      const RESULT_STATE = {...INITIAL_STATE, userInfo: FAKE_USER};

      expect(dataReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
});
