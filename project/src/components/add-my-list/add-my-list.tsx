import { useDispatch, useSelector } from 'react-redux';
import { FilmType } from '../../types/types';
import { ThunkAppDispatch } from '../../types/action';
import { fetchFavorites, setFavorite } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import { useState } from 'react';
import {
  getFavorites,
  getFilm
} from '../../store/reducers/data-reducer/selectors';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';
import { getIsFavoritesLoading } from '../../store/reducers/status-reducer/selectors';

const isFavoriteFilm = (
  favorites: FilmType[],
  film: FilmType | null,
): boolean => {
  if (film) {
    return !!favorites.find((favorite) => favorite.id === film.id);
  } else {
    return false;
  }
};

function AddMyList(): JSX.Element {
  const favorites = useSelector(getFavorites);
  const film = useSelector(getFilm);
  const authorizationStatus = useSelector(getAuthStatus);
  const isFavoritesLoading = useSelector(getIsFavoritesLoading);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(isFavoriteFilm(favorites, film));

  const handleMyListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    if (film) {
      setIsFavorite((prevState) => !prevState);
      (dispatch as ThunkAppDispatch)(setFavorite(isFavorite, film.id));
      (dispatch as ThunkAppDispatch)(fetchFavorites());
    }
  };

  if (isFavoritesLoading) {
    return <LoadingScreen />;
  }

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyListClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? <use xlinkHref="#in-list" /> : <use xlinkHref="#add" />}
      </svg>
      <span>My list</span>
    </button>
  );
}

export default AddMyList;
