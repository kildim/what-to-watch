import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import {StateType} from '../../types/state';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import UserBlock from '../user-block/user-block';
import {useEffect} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {fetchFavorites} from '../../store/api-actions';

const mapStateToProps = ({films, favorites}: StateType) => ({
  films, favorites,
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyList(props: PropsFromRedux): JSX.Element {
  const {favorites} = props;

  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkAppDispatch)(fetchFavorites());
  }, []);

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
        <CatalogFilmsList films={favorites}/>
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

export  {MyList};
export default connector(MyList);
