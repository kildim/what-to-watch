import { ThunkActionResult } from '../types/action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import {
  loadFavorites,
  loadFilmComments,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  loadUserInfo,
  redirectToRoute,
  setAuthorizationStatus,
  setGenres, setIsFavoritesLoading,
  setIsFilmsDataLoading,
  setIsReviewPosting
} from './action';
import { dropToken, saveToken, Token } from '../services/token';
import { AuthData } from '../types/auth-data';
import {
  getGenres,
  parseAuthInfoFromServerFormat,
  parseFilmFromServerFormat
} from '../utils/utils';
import {
  FilmType,
  PostCommentType,
  ServerFilmType,
  UserInfoType
} from '../types/types';
import { generatePath } from 'react-router-dom';

export const fetchFilmsAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        dispatch(setIsFilmsDataLoading(true));
        const { data: serverFilmsData } = await api.get(APIRoute.Films);
        const filmsData: FilmType[] = serverFilmsData.map(
          (film: ServerFilmType) => parseFilmFromServerFormat(film),
        );
        dispatch(loadFilms(filmsData));
        dispatch(setGenres(getGenres(filmsData)));
        dispatch(setIsFilmsDataLoading(false));
      } catch (error) {
      // eslint-disable-next-line no-console
        console.log('fetchFilmsAction Error');
        dispatch(setIsFilmsDataLoading(false));
      }
    };

export const fetchFavorites =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        dispatch(setIsFavoritesLoading(true));
        const { data: serverFavorites } = await api.get(APIRoute.Favorites);
        // eslint-disable-next-line no-console
        console.log(serverFavorites);
        const favoritesData: FilmType[] = serverFavorites.map(
          (film: ServerFilmType) => parseFilmFromServerFormat(film),
        );
        dispatch(loadFavorites(favoritesData));
        dispatch(setIsFavoritesLoading(false));
      } catch (error) {
      // eslint-disable-next-line no-console
        console.log('fetchFavorites Error');
        dispatch(setIsFavoritesLoading(false));
      }
    };

export const fetchSimilarFilmsAction =
  (similarFilmsPath: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data: serverFilmsData } = await api.get(similarFilmsPath);
        const filmsData = serverFilmsData.map((film: ServerFilmType) =>
          parseFilmFromServerFormat(film),
        );
        dispatch(loadSimilarFilms(filmsData));
      } catch (error) {
      // eslint-disable-next-line no-console
        console.log('fetchSimilarFilmsAction Error');
      }
    };

export const fetchFilmCommentsAction =
  (commentsPath: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data: comments } = await api.get(commentsPath);
        dispatch(loadFilmComments(comments));
      } catch (error) {
      // eslint-disable-next-line no-console
        console.log('fetchFilmCommentsAction Error');
      }
    };

export const fetchPromoAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data: serverPromoData } = await api.get(APIRoute.Promo);
      const promoData = parseFilmFromServerFormat(serverPromoData);
      dispatch(loadPromo(promoData));
    };

export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login).then(({ data: serverAuthInfo }) => {
        const {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
          token: userToken,
        } = parseAuthInfoFromServerFormat(serverAuthInfo);
        saveToken(userToken);
        const userInfo: UserInfoType = {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
        };
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(loadUserInfo(userInfo));
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('checkAuthAction Error');
    }
  };
export const loginAction =
  ({ login: email, password }: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      await api
        .post(APIRoute.Login, { email, password })
        .then(({ data: serverAuthInfo }) => {
          const {
            id: userId,
            email: userEmail,
            name: userName,
            avatarUrl: userAvatarUrl,
            token: userToken,
          } = parseAuthInfoFromServerFormat(serverAuthInfo);
          saveToken(userToken);
          const userInfo: UserInfoType = {
            id: userId,
            email: userEmail,
            name: userName,
            avatarUrl: userAvatarUrl,
          };
          dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
          dispatch(loadUserInfo(userInfo));
          dispatch(redirectToRoute(AppRoute.Main));
        });
    };

export const postReview =
  ({ rating, comment }: PostCommentType, id: string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const postCommentUrl = generatePath(APIRoute.PostComment, { id });
      const filmUrl = generatePath(AppRoute.Film, { id });
      dispatch(setIsReviewPosting(true));
      await api
        .post<{ token: Token }>(postCommentUrl, {
          rating,
          comment,
        })
        .then((response) => {
        // eslint-disable-next-line no-console
          console.log(response.data);
          dispatch(redirectToRoute(filmUrl));
          dispatch(setIsReviewPosting(false));
        })
        .catch((error) => {
          dispatch(setIsReviewPosting(false));
          // eslint-disable-next-line no-console
          console.log(error);
        });
    };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  };
