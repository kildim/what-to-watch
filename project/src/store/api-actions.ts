import {ThunkActionResult} from '../types/action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {loadFilms, loadPromo, redirectToRoute, setAuthorizationStatus, setIsDataLoaded} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';
import {parseFilmFromServerFormat} from '../utils/utils';
import {ServerFilmType} from '../types/types';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverFilmsData} = await api.get(APIRoute.Films);
    const filmsData = serverFilmsData.map((film: ServerFilmType) => parseFilmFromServerFormat(film));
    dispatch(loadFilms(filmsData));
  };

export const fetchPromoAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void > => {
    const {data: serverPromoData} = await  api.get(APIRoute.Promo);
    const promoData = parseFilmFromServerFormat(serverPromoData);
    dispatch(loadPromo(promoData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(setIsDataLoaded(true));
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{ token: Token }>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setIsDataLoaded(true));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  };
