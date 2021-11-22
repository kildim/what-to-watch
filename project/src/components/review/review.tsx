import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReviewForm from '../review-form/review-form';
import { StateType } from '../../types/state';
import Page404 from '../page-404/page-404';
import UserBlock from '../user-block/user-block';

const mapStateToProps = ({ DATA }: StateType) => ({
  films: DATA.films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Review(props: PropsFromRedux): JSX.Element {
  const { films } = props;

  const { id } = useParams<{ id?: string }>();

  const film = films.find((movie) => movie.id === Number(id));

  if (film === undefined) {
    return <Page404 />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {film.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
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

export { Review };
export default connector(Review);

