import {Token} from '../services/token';

export type FilmType = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string [],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
}

export type ServerFilmType = {
  id: string,
  name: string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  description: string,
  rating: string,
  'scores_count': string,
  director: string,
  starring: string [],
  'run_time': string,
  genre: string,
  released: number,
  'is_favorite': string,
}

export type CommentType = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: Date
}

export type PostCommentType = {
  rating: string,
  comment: string
}

export type AuthInfoType = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: Token
}

export type UserInfoType = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
}

export type ServerAuthInfoType = {
  id: number,
  email: string,
  name: string,
  'avatar_url': string,
  token: Token
}
