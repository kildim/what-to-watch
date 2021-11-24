import { StateType } from '../../../types/state';
import { NameSpace } from '../../root-reducer';

export const getIsFilmsDataLoading = (state: StateType): boolean =>
  state[NameSpace.status].isFilmsDataLoading;
export const getIsReviewPosting = (state: StateType): boolean =>
  state[NameSpace.status].isReviewPosting;
export const getIsFavoritesLoading = (state: StateType): boolean =>
  state[NameSpace.status].isFavoritesLoading;
