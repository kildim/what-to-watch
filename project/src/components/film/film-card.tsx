import PlayFilm from '../play-film/play-film';
import AddMyList from '../add-my-list/add-my-list';
import { generatePath, Link } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';
import Page404 from '../page-404/page-404';
import { FilmType } from '../../types/types';

type FilmCardPropsType = {
  film: FilmType;
};

function FilmCard({ film }: FilmCardPropsType): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);

  if (film === null) {
    return <Page404 />;
  }
  const addReviewPath = generatePath(AppRoute.AddReview, { id: film.id });

  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{film.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{film.genre}</span>
          <span className="film-card__year">{film.released}</span>
        </p>

        <div className="film-card__buttons">
          <PlayFilm film={film} />
          <AddMyList film={film} />
          <Link
            to={addReviewPath}
            className={classNames('btn film-card__button', {
              'visually-hidden':
                authorizationStatus !== AuthorizationStatus.Auth,
            })}
          >
            Add review
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
