
export enum Action {
  SetGenre = 'film/setGenre',
  GetGenre = 'film/getGenreFilms',
}

export const setGenre = (genre: string) => ({
  type: Action.SetGenre,
  payload: genre,
} as const);

export const getGenreFilms = (genre: string) => ({
  type: Action.GetGenre,
  payload: {
    genre,
  },
} as const);
