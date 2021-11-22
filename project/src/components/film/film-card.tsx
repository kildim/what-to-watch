import PlayFilm from '../play-film/play-film';
import AddMyList from '../add-my-list/add-my-list';
import { generatePath, Link } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FilmType } from '../../types/types';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';

type FilmCardProps = {
  film: FilmType;
};

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);
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
          <PlayFilm />
          <AddMyList />
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

