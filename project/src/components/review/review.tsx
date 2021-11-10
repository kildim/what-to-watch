import ReviewForm from '../review-form/review-form';
import {StateType} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {useParams} from 'react-router-dom';
import Page404 from '../page-404/page-404';

const mapStateToProps = ({ films }: StateType) => ({
  films,
});


const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Review(props: PropsFromRedux):JSX.Element {
  const { films } = props;

  const {id} = useParams<{id?: string}>();

  const film = films.find((movie) => movie.id === Number(id));

  if (film === undefined) {
    return <Page404/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
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
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm/>
      </div>

    </section>
  );
}

export {Review};
export default connector(Review);

