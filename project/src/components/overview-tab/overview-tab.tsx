import {FilmType} from '../../types/types';
import {rangeFilm} from '../../utils/utils';

type OverviewTabProps = {
  film: FilmType
}

function OverviewTab (props: OverviewTabProps):JSX.Element {
  const {film} = props;

  const starring = `${film.starring.join(', ')}.`;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rangeFilm(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {film.description}I
        </p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {starring}</strong>
        </p>
      </div>
    </>
  );
}

export default OverviewTab;
