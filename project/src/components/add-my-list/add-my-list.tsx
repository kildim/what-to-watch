import { useDispatch, useSelector } from 'react-redux';
import { FilmType } from '../../types/types';
import { ThunkAppDispatch } from '../../types/action';
import { setFavoriteFlag } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';

type AddMyListPropsType = {
  film: FilmType;
};

function AddMyList(props: AddMyListPropsType): JSX.Element {
  const { film } = props;
  const authorizationStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  const handleMyListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    if (film) {
      (dispatch as ThunkAppDispatch)(
        setFavoriteFlag(!film.isFavorite, film.id),
      );
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyListClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {film?.isFavorite &&
        authorizationStatus === AuthorizationStatus.Auth ? (
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
