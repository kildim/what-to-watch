
export enum Action {
  SetGenre = 'film/setGenre',
  GetGenreFilms = 'film/getGenreFilms',
}

export const setGenre = (genre: string) => ({
  type: Action.SetGenre,
  payload: {
    genre,
  },
} as const);

export const getGenreFilms = (genre: string) => ({
  type: Action.GetGenreFilms,
  payload: {
    genre,
  },
} as const);
