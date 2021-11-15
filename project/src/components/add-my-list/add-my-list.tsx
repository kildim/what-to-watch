import { StateType } from '../../types/state';
import { connect, ConnectedProps, useStore } from 'react-redux';
import { FilmType } from '../../types/types';
import { ThunkAppDispatch } from '../../types/action';
import { fetchFavorites, setFavorite } from '../../store/api-actions';

const mapStateToProps = ({
  favorites,
  film,
}: StateType) => ({
  favorites,
  film,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux;

const isFavorite = (favorites: FilmType[], film: FilmType): boolean =>
  !!favorites.find((favorite) => favorite.id === film.id);

function AddMyList(props: ConnectedComponentProps): JSX.Element {
  const { favorites, film } = props;
  const store = useStore();

  const handleMyList = () => {
    (store.dispatch as ThunkAppDispatch)(
      setFavorite(isFavorite(favorites, film), film.id),
    );
    (store.dispatch as ThunkAppDispatch)(fetchFavorites());
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyList}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite(favorites, film) ? (
          <use xlinkHref="#in-list"></use>
        ) : (
          <use xlinkHref="#add"></use>
        )}
      </svg>
      <span>My list</span>
    </button>
  );
}

export { AddMyList };
export default connector(AddMyList);
