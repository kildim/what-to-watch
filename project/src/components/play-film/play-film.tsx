import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { StateType } from '../../types/state';
import { connect, ConnectedProps, useStore } from 'react-redux';
import { redirectToRoute } from '../../store/action';

const mapStateToProps = ({ DATA }: StateType) => ({ film: DATA.film });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayFilm(props: PropsFromRedux): JSX.Element {
  const { film } = props;
  const store = useStore();

  const handlePlayFilm = () => {
    if (film) {
      const playerRoute = generatePath(AppRoute.Player, { id: film.id });
      store.dispatch(redirectToRoute(playerRoute));
    }
  };

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={handlePlayFilm}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
}

export { PlayFilm };
export default connector(PlayFilm);

