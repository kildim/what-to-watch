import { useDispatch, useSelector } from 'react-redux';
import { FilmType } from '../../types/types';
import { ThunkAppDispatch } from '../../types/action';
import { setFavoriteFlag } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';
import { getIsFavoritesLoading } from '../../store/reducers/status-reducer/selectors';

type AddMyListPropsType = {
  film: FilmType;
};

function AddMyList(props: AddMyListPropsType): JSX.Element {
  const { film } = props;
  const authorizationStatus = useSelector(getAuthStatus);
  const isFavoritesLoading = useSelector(getIsFavoritesLoading);
  const dispatch = useDispatch();

  const handleMyListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    if (film) {
      (dispatch as ThunkAppDispatch)(setFavoriteFlag(!film.isFavorite, film.id));
      // eslint-disable-next-line no-console
      console.log(`My list: ${film.isFavorite}`);
      // (dispatch as ThunkAppDispatch)(fetchFavorites());
    }
  };

  // 1. На клиенте меняем статус фильма + UI
  // post на backend film/:id -> isFavorite
  // 200 -> ничего не делать
  // !200 -> отмена состояния на UI  -> п1

  // film[] -> id current film
  // map(films) -> id -> is_favorite = true
  // backed 200 ok
  // ! 200 map(films) -> id -> is_favorite = false

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
        {film?.isFavorite ? (
          <use xlinkHref="#in-list" />
        ) : (
          <use xlinkHref="#add" />
        )}
      </svg>
      <span>My list</span>
    </button>
  );
}

export default AddMyList;
