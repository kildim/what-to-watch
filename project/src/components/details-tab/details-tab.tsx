import {convertMinutesToHoursWithMinutes, joinArrayByComma} from '../../utils/utils';
import {FilmType} from '../../types/types';
import {CSSProperties} from 'react';

type DetailsTabProps = {
  film: FilmType
}

const STARRING_STYLE: CSSProperties = {whiteSpace: 'pre-line'};

function DetailsTab (prop: DetailsTabProps): JSX.Element {
  const {film} = prop;

  const starring = joinArrayByComma(film.starring);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value" style={STARRING_STYLE}>{starring}</span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertMinutesToHoursWithMinutes(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailsTab;
