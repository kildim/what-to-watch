import { generatePath, Link, useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../footer/footer';
import { AppRoute } from '../../const';
import FilmCardTabs from '../film-card-tabs/film-card-tabs';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import Page404 from '../page-404/page-404';
import {useEffect} from 'react';
import {
  fetchFilmCommentsAction,
  fetchSimilarFilmsAction
} from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import UserBlock from '../user-block/user-block';
import FilmCard from './film-card';
import {
  getComments,
  getFilms,
  getSimilarFilms
} from '../../store/reducers/data-reducer/selectors';
import {loadFilm} from '../../store/action';

const SIMILAR_NUMBER = 4;

function Film(): JSX.Element {
  const films = useSelector(getFilms);
  const comments = useSelector(getComments);
  const similarFilms = useSelector(getSimilarFilms);
  const { url } = useRouteMatch();
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  const film = films.find((movie) => movie?.id === Number(id));

  const similarFilmsPath = generatePath(AppRoute.Similar, { id: id });
  const commentsPath = generatePath(AppRoute.Comments, { id: id });

  useEffect(() => {
    dispatch(loadFilm(film ? film : null));
    (dispatch as ThunkAppDispatch)(fetchSimilarFilmsAction(similarFilmsPath));
    (dispatch as ThunkAppDispatch)(fetchFilmCommentsAction(commentsPath));
  }, [url, commentsPath, dispatch, similarFilmsPath, film]);

  if (!film) {
    return <Page404 />;
  }

  const FILM_CARD_INLINE_STYLE = {
    backgroundColor: film.backgroundColor,
  };

  return (
    <>
      <section
        className="film-card film-card--full"
        style={FILM_CARD_INLINE_STYLE}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          {/*пробрасываем Film пропсами до кнопки AddList*/}
          <FilmCard/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>
            <FilmCardTabs film={film} comments={comments} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogFilmsList films={similarFilms.slice(0, SIMILAR_NUMBER)} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Film;

