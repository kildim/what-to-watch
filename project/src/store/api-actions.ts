import {ThunkActionResult} from '../types/action';
import {APIRoute, AuthorizationStatus} from '../const';
import {loadFilms, requireAuthorization, requireLogout} from './action';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';
import {parseFilmsFromServer, ServerFilmType} from '../utills/adaptor';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerFilmType[]>(APIRoute.Films);
    dispatch(loadFilms(parseFilmsFromServer(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{ token: Token }>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
