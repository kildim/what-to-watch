import {ThunkActionResult} from '../types/action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  loadFilm,
  loadFilmComments,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  requireLogout
} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';
import {parseFilmFromServerFormat} from '../utils/utils';
import {ServerFilmType} from '../types/types';
import axios from 'axios';
import browserHistory from '../browser-history';

export const fetchFilmsAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data: serverFilmsData} = await api.get(APIRoute.Films);
        const filmsData = serverFilmsData.map((film: ServerFilmType) =>
          parseFilmFromServerFormat(film),
        );
        dispatch(loadFilms(filmsData));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
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
      } catch (e) {
        if (axios.isAxiosError(e)) {
          // eslint-disable-next-line no-console
          console.log(e.response?.status);
        } else {
          throw e;
        }

      }
    };

export const fetchFilmCommentsAction =
  (commentsPath: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const {data: comments} = await api.get(commentsPath);
      dispatch(loadFilmComments(comments));
    };

export const fetchFilmAction =
  (filmPath: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const {data: serverFilmData} = await api.get(filmPath);
        const filmData = parseFilmFromServerFormat(serverFilmData);
        dispatch(loadFilm(filmData));
      } catch (e) {
        browserHistory.push(AppRoute.Page404);
      }

    };

export const fetchPromoAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const {data: serverPromoData} = await api.get(APIRoute.Promo);
      const promoData = parseFilmFromServerFormat(serverPromoData);
      dispatch(loadPromo(promoData));
    };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login).then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<{ token: Token }>(APIRoute.Login, {email, password}).then(({data: {token}}) => {
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    });
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
