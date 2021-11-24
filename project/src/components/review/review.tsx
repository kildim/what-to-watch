import { useSelector } from 'react-redux';
import { generatePath, Link, useLocation, useParams } from 'react-router-dom';
import ReviewForm from '../review-form/review-form';
import Page404 from '../page-404/page-404';
import UserBlock from '../user-block/user-block';
import { getFilms } from '../../store/reducers/data-reducer/selectors';
import {AppRoute} from '../../const';

function Review(): JSX.Element {
  const films = useSelector(getFilms);

  const { id } = useParams<{ id?: string }>();

  const film = films.find((movie) => movie?.id === Number(id));
  const location = useLocation();

  if (!film) {
    return <Page404 />;
  }
  const filmPath = generatePath(AppRoute.Film, { id: film.id });

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={filmPath} className={'breadcrumbs__link'}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={location.pathname}>Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>
    </section>
  );
}

export default Review;

