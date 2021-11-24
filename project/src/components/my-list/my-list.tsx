import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import { useDispatch, useSelector } from 'react-redux';
import UserBlock from '../user-block/user-block';
import { useEffect } from 'react';
import { ThunkAppDispatch } from '../../types/action';
import { fetchFavorites } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { getFavorites } from '../../store/reducers/data-reducer/selectors';
import { getIsFavoritesLoading } from '../../store/reducers/status-reducer/selectors';

function MyList(): JSX.Element {
  const favorites = useSelector(getFavorites);
  const isFavoritesLoading = useSelector(getIsFavoritesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkAppDispatch)(fetchFavorites());
  }, [dispatch]);

  if (isFavoritesLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogFilmsList films={favorites} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;

