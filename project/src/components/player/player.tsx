import { FilmType } from '../../types/types';
import { StateType } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';

const mapStateToProps = ({ genre, films }: StateType) => ({
  genre,
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Player(props: PropsFromRedux): JSX.Element {
  const { films } = props;

  const { id } = useParams<{ id?: string }>();

  if (id === undefined) {
    return <div>Unknown film</div>;
  }

  const film: FilmType = films[Number(id)];

  const progressStyles = {
    left: '30%',
  };

  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.posterImage}
      />

      <button type="button" className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={progressStyles}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export  {Player};
export default connector(Player);
