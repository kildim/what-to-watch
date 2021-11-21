import { StateType } from '../../types/state';
import { connect, ConnectedProps, useStore } from 'react-redux';
import { FilmType } from '../../types/types';
import { ThunkAppDispatch } from '../../types/action';
import { fetchFavorites, setFavorite } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';

const mapStateToProps = ({
  favorites,
  film,
  authorizationStatus,
}: StateType) => ({
  favorites,
  film,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const isFavorite = (favorites: FilmType[], film: FilmType | null): boolean => {
  if (film) {
    return !!favorites.find((favorite) => favorite.id === film.id);
  } else {
    return false;
  }
};

function AddMyList(props: PropsFromRedux): JSX.Element {
  const { favorites, film, authorizationStatus } = props;
  const store = useStore();

  const handleMyListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      store.dispatch(redirectToRoute(AppRoute.SignIn));
    }
    if (film) {
      (store.dispatch as ThunkAppDispatch)(
        setFavorite(isFavorite(favorites, film), film.id),
      );
      (store.dispatch as ThunkAppDispatch)(fetchFavorites());
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyListClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite(favorites, film) ? (
          <use xlinkHref="#in-list" />
        ) : (
          <use xlinkHref="#add" />
        )}
      </svg>
      <span>My list</span>
    </button>
  );
}

export { AddMyList };
export default connector(AddMyList);
