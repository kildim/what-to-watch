import {setIsFavoritesLoading, setIsFilmsDataLoading, setIsReviewPosting} from '../../action';
import {StatusReducerType} from '../../../types/state';
import {statusReducer} from './status-reducer';

const FAKE_STATE: StatusReducerType = {
  isFilmsDataLoading: false,
  isReviewPosting: false,
  isFavoritesLoading: false,
};

describe ('Status-reducer tests:', () => {
  describe('tests setIsFilmsDataLoading action', () => {
    it('set isFilmDataLoading flag', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = setIsFilmsDataLoading(!FAKE_STATE.isFilmsDataLoading);
      const RESULT_STATE = {...INITIAL_STATE, isFilmsDataLoading: !FAKE_STATE.isFilmsDataLoading};

      expect(statusReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('tests setIsReviewPosting action', () => {
    it('set isReviewPosting flag', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = setIsReviewPosting(!FAKE_STATE.isReviewPosting);
      const RESULT_STATE = {...INITIAL_STATE, isReviewPosting: !FAKE_STATE.isReviewPosting};

      expect(statusReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
  describe('tests setIsFavoritesLoading action', () => {
    it('set isFavoritesLoading flag', () => {
      const INITIAL_STATE = FAKE_STATE;
      const ACTION = setIsFavoritesLoading(true);
      const RESULT_STATE = {...INITIAL_STATE, isFavoritesLoading: !FAKE_STATE.isFavoritesLoading};

      expect(statusReducer(INITIAL_STATE, ACTION)).toEqual(RESULT_STATE);
    });
  });
});
