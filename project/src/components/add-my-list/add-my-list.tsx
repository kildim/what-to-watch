import { StateType } from '../../types/state';
import { connect, ConnectedProps, useStore } from 'react-redux';
import { FilmType } from '../../types/types';
import { ThunkAppDispatch } from '../../types/action';
import { fetchFavorites, setFavorite } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import {useState} from 'react';

const mapStateToProps = ({
  favorites,
  film,
  authorizationStatus,
  isFavoritesLoading,
}: StateType) => ({
  favorites,
  film,
  authorizationStatus,
  isFavoritesLoading,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const isFavoriteFilm = (favorites: FilmType[], film: FilmType | null): boolean => {
  if (film) {
    return !!favorites.find((favorite) => favorite.id === film.id);
  } else {
    return false;
  }
};

function AddMyList(props: PropsFromRedux): JSX.Element {
// function AddMyList(): JSX.Element {
  const { favorites, film, authorizationStatus, isFavoritesLoading } = props;
  const store = useStore();

  const [isFavorite, setIsFavorite] = useState(isFavoriteFilm(favorites, film));

  const handleMyListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      store.dispatch(redirectToRoute(AppRoute.SignIn));
    }
    if (film) {
      setIsFavorite((prevState) => !prevState);
      (store.dispatch as ThunkAppDispatch)(
        setFavorite(isFavorite, film.id),
      );
      (store.dispatch as ThunkAppDispatch)(fetchFavorites());
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
        {isFavorite ? (
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
