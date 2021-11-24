import { createReducer } from '@reduxjs/toolkit';
import { StatusReducerType } from '../../../types/state';
import {
  setIsFavoritesLoading,
  setIsFilmsDataLoading,
  setIsReviewPosting
} from '../../action';

const initialState: StatusReducerType = {
  isFilmsDataLoading: false,
  isReviewPosting: false,
  isFavoritesLoading: false,
};

const statusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsFilmsDataLoading, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setIsReviewPosting, (state, action) => {
      state.isReviewPosting = action.payload;
    })
    .addCase(setIsFavoritesLoading, (state, action) => {
      state.isFavoritesLoading = action.payload;
    });
});

export { statusReducer };
