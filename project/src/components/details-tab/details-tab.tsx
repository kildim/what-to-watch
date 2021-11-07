import {joinArrayByComma} from '../../utils/utils';
import {StateType} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({film}: StateType) => ({
  film,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function DetailsTab (prop: PropsFromRedux): JSX.Element {
  const {film} = prop;

  // eslint-disable-next-line no-console
  console.log(film);

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
          <span className="film-card__details-value" style={{whiteSpace: 'pre-line'}}>{starring}</span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film.runTime}</span>
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

export {DetailsTab};
export default connector(DetailsTab);
