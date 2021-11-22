import { useEffect, useMemo, useState } from 'react';
import { connect, ConnectedProps, useStore } from 'react-redux';

import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import Footer from '../footer/footer';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import ShowButton from '../show-button/show-button';

import { StateType } from '../../types/state';
import { filterFilmsByGenre } from '../../utils/utils';
import { ThunkAppDispatch } from '../../types/action';
import { fetchPromoAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import MainHeader from './main-header';
import MainPromo from './main-promo';

const CHUNK_LENGTH = 8;

const mapStateToProps = ({ DATA }: StateType) => ({
  genre: DATA.genre,
  films: DATA.films,
  film: DATA.film,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const { genre, films, film } = props;

  const [listCount, setListCount] = useState(CHUNK_LENGTH);
  const store = useStore();
  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchPromoAction());
  }, [store.dispatch]);

  useEffect(() => {
    setListCount(CHUNK_LENGTH);
  }, [genre]);

  const handleShowButtonClick = () => {
    setListCount((count) => {
      count += CHUNK_LENGTH;
      return count;
    });
  };

  const filmsList = filterFilmsByGenre(films, genre);
  const isShowButtonVisible: boolean = useMemo(
    () => filmsList.length > listCount,
    [filmsList.length, listCount],
  );

  if (!film) {
    return <LoadingScreen />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt="Film background" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <MainHeader />
        <MainPromo film={film} />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenresList />
          <CatalogFilmsList films={filmsList.slice(0, listCount)} />
          <ShowButton
            onClickHandler={handleShowButtonClick}
            visibility={isShowButtonVisible}
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export { Main };
export default connector(Main);
