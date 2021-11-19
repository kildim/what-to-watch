import {useEffect, useState, useMemo} from 'react';
import {connect, ConnectedProps, useStore} from 'react-redux';

import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import Footer from '../footer/footer';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import ShowButton from '../show-button/show-button';

import {StateType} from '../../types/state';
import {filterFilmsByGenre} from '../../utils/utils';
import UserBlock from '../user-block/user-block';
import AddMyList from '../add-my-list/add-my-list';
import {ThunkAppDispatch} from '../../types/action';
import {fetchPromoAction} from '../../store/api-actions';
import PlayFilm from '../play-film/play-film';

const CHUNK_LENGTH = 8;

const mapStateToProps = ({genre, films, film}: StateType) => ({
  genre,
  films,
  film,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const {genre, films, film} = props;

  const [listCount, setListCount] = useState(CHUNK_LENGTH);
  const store = useStore();
  useEffect( () => {
    (store.dispatch as ThunkAppDispatch)(fetchPromoAction());
  }, []);


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
  const isShowButtonVisible: boolean = useMemo(() => filmsList.length > listCount, [filmsList.length, listCount]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={film.posterImage}
                alt={`${film.name} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayFilm />
                <AddMyList />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenresList/>
          <CatalogFilmsList films={filmsList.slice(0, listCount)}/>
          <ShowButton onClickHandler={handleShowButtonClick} visibility={isShowButtonVisible}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export {Main};
export default connector(Main);
