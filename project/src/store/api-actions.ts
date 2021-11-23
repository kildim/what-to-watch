import {ThunkActionResult} from '../types/action';
import {APIRoute, AppRoute, AuthorizationStatus, TOAST_MESSAGE} from '../const';
import {
  loadFavorites,
  loadFilm,
  loadFilmComments,
  loadFilms,
  loadSimilarFilms,
  loadUserInfo,
  redirectToRoute,
  setAuthorizationStatus,
  setGenres,
  setIsFavoritesLoading,
  setIsFilmsDataLoading,
  setIsReviewPosting
} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthDataType} from '../types/auth-data-type';
import {getGenres, parseAuthInfoFromServerFormat, parseFilmFromServerFormat} from '../utils/utils';
import {FilmType, PostCommentType, ServerFilmType, UserInfoType} from '../types/types';
import {generatePath} from 'react-router-dom';
import {toast} from 'react-toastify';

export const fetchFilmsAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        dispatch(setIsFilmsDataLoading(true));
        const {data: serverFilmsData} = await api.get(APIRoute.Films);
        const filmsData: FilmType[] = serverFilmsData.map(
          (film: ServerFilmType) => parseFilmFromServerFormat(film),
        );
        dispatch(loadFilms(filmsData));
        dispatch(setGenres(getGenres(filmsData)));
        dispatch(setIsFilmsDataLoading(false));
      } catch (error) {
        dispatch(setIsFilmsDataLoading(false));
        toast(TOAST_MESSAGE.FETCH_FILMS_ERROR);
      }
    };

export const fetchFavorites =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        dispatch(setIsFavoritesLoading(true));
        const {data: serverFavorites} = await api.get(APIRoute.Favorites);
        const favoritesData: FilmType[] = serverFavorites.map(
          (film: ServerFilmType) => parseFilmFromServerFormat(film),
        );
        dispatch(loadFavorites(favoritesData));
        dispatch(setIsFavoritesLoading(false));
      } catch (error) {
        dispatch(setIsFavoritesLoading(false));
        toast(TOAST_MESSAGE.FETCH_FAVORITES_ERROR_MESSAGE);
      }
    };

export const fetchSimilarFilmsAction =
  (similarFilmsPath: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data: serverFilmsData} = await api.get(similarFilmsPath);
        const filmsData = serverFilmsData.map((film: ServerFilmType) =>
          parseFilmFromServerFormat(film),
        );
        dispatch(loadSimilarFilms(filmsData));
      } catch (error) {
        toast(TOAST_MESSAGE.FETCH_SIMILAR_ERROR_MESSAGE);
      }
    };

export const fetchFilmCommentsAction =
  (commentsPath: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data: comments} = await api.get(commentsPath);
        dispatch(loadFilmComments(comments));
      } catch (error) {
        toast(TOAST_MESSAGE.FETCH_COMMENTS_ERROR_MESSAGE);
      }
    };

export const fetchPromoAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const {data: serverPromoData} = await api.get(APIRoute.Promo);
      const promoData = parseFilmFromServerFormat(serverPromoData);
      dispatch(loadFilm(promoData));
    };

export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login).then(({data: serverAuthInfo}) => {
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
      toast.info(TOAST_MESSAGE.AUTH_SUGGESTION);
    }
  };
export const loginAction =
  ({login: email, password}: AuthDataType): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      try {
        const {data} = await api.post(APIRoute.Login, {email, password});
        const {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
          token: userToken,
        } = parseAuthInfoFromServerFormat(data);
        saveToken(userToken);
        const userInfo: UserInfoType = {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
        };
        dispatch(loadUserInfo(userInfo));
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(redirectToRoute(AppRoute.Main));
      } catch (error) {
        toast.info(TOAST_MESSAGE.POST_LOGIN_ACTION_ERROR_MESSAGE);
      }
    };

export const postReview =
  ({rating, comment}: PostCommentType, id: string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const postCommentUrl = generatePath(APIRoute.PostComment, {id});
      const filmUrl = generatePath(AppRoute.Film, {id});
      dispatch(setIsReviewPosting(true));
      try {
        await api
          .post<{ token: Token }>(postCommentUrl, {
            rating,
            comment,
          })
          .then(() => {
            dispatch(redirectToRoute(filmUrl));
            dispatch(setIsReviewPosting(false));
          });
      } catch (error) {
        dispatch(setIsReviewPosting(false));
        toast.info(TOAST_MESSAGE.POST_ERROR);
      }
    };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const setFavorite =
  (isFavorite: boolean, id: number): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const status = isFavorite ? '0' : '1';
      const postFavorite = generatePath(APIRoute.FavoriteStatus, {
        'film_id': id,
        status: status,
      });
      dispatch(setIsFavoritesLoading(true));
      try {
        await api.post(postFavorite);
        dispatch(setIsFavoritesLoading(false));
      } catch (error) {
        dispatch(setIsFavoritesLoading(false));
        toast(TOAST_MESSAGE.POST_SET_FAVORITE_ERROR_MESSAGE);
      }
    };
