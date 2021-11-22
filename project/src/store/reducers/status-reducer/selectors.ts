import { StateType } from '../../../types/state';
import { NameSpace } from '../../root-reducer';

export const getIsFilmsDataLoading = (state: StateType) =>
  state[NameSpace.status].isFilmsDataLoading;
export const getIsReviewPosting = (state: StateType) =>
  state[NameSpace.status].isReviewPosting;
export const getIsFavoritesLoading = (state: StateType) =>
  state[NameSpace.status].isFavoritesLoading;
