import {ThunkActionResult} from '../types/action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  loadFilmComments,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  redirectToRoute,
  setAuthorizationStatus, setGenres,
  setIsFilmsDataLoading
} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';
import {getGenres, parseFilmFromServerFormat} from '../utils/utils';
import {FilmType, ServerFilmType} from '../types/types';
import axios from 'axios';

export const fetchFilmsAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        dispatch(setIsFilmsDataLoading(true));
        const {data: serverFilmsData} = await api.get(APIRoute.Films);
        const filmsData: FilmType[] = serverFilmsData.map((film: ServerFilmType) =>
          parseFilmFromServerFormat(film),
        );
        dispatch(loadFilms(filmsData));
        dispatch(setGenres(getGenres(filmsData)));
        dispatch(setIsFilmsDataLoading(false));
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
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<{ token: Token }>(APIRoute.Login, {email, password}).then(({data: {token}}) => {
      saveToken(token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    });
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  };
