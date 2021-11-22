import { createReducer } from '@reduxjs/toolkit';
import { DataReducerType } from '../../../types/state';
import { ALL_GENRES_ITEM } from '../../../const';
import {
  loadFavorites,
  loadFilm,
  loadFilmComments,
  loadFilms,
  loadSimilarFilms,
  loadUserInfo,
  setGenre,
  setGenres
} from '../../action';

const initialState: DataReducerType = {
  genre: ALL_GENRES_ITEM as string,
  films: [],
  genres: [ALL_GENRES_ITEM],
  film: null,
  similarFilms: [],
  comments: [],
  userInfo: null,
  favorites: [],
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload.genres;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.similarFilms;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload.film;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadFilmComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { dataReducer };
