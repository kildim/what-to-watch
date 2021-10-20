import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState} from 'react';
import {AppRoute} from '../../const';

type FilmCardTabsProps = {
  film: Film,
}

type tabProps = {
  film: Film,
  setActiveTab: (activeTab: number) => void,
}

enum Tabs {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Overview,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Details,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Reviews
}

function Overview ({film, setActiveTab}: tabProps) {
  const starring = `${film.starring.join(', ')}.`;

  setActiveTab(Tabs.Overview);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
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

function Details ({film, setActiveTab}: tabProps) {
  const starring = film.starring.join(',\n');

  setActiveTab(Tabs.Details);
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

function Reviews ({film, setActiveTab}: tabProps) {

  setActiveTab(Tabs.Reviews);
  return (

    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in
                years.
            </p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Anderson&apos;s films are too precious for some, but for those of us willing to
                lose ourselves in them, they&apos;re a delight. &ldquo;The Grand Budapest Hotel&ldquo; is no different, except that he
                has added a hint of gravitas to the mix, improving the recipe.
            </p>

            <footer className="review__details">
              <cite className="review__author">Bill Goodykoontz</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,0</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an
                hour and 40 minutes I wish I could take back.
            </p>

            <footer className="review__details">
              <cite className="review__author">Amanda Greever</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,0</div>
        </div>
      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and
                here and there, gruesome and/or heartbreaking.
            </p>

            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,2</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the
                content is a little more adult.
            </p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,6</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the
                content is a little more adult.
            </p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,0</div>
        </div>
      </div>
    </div>

  );
}

function FilmCardTabs ({film}: FilmCardTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(Tabs.Overview);
  const {url} = useRouteMatch();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${  activeTab === Tabs.Overview ? 'film-nav__item--active' : ''}`}>
            <Link to={`${url}/overview`} className="film-nav__link" >Overview</Link>
          </li>
          <li className={`film-nav__item ${  activeTab === Tabs.Details ? 'film-nav__item--active' : ''}`}>
            <Link to={`${url}/details`} className="film-nav__link" >Details</Link>
          </li>
          <li className={`film-nav__item ${  activeTab === Tabs.Reviews ? 'film-nav__item--active' : ''}`}>
            <Link to={`${url}/reviews`} className="film-nav__link" >Reviews</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={AppRoute.Details}>
          <Details film={film} setActiveTab={setActiveTab}/>
        </Route>
        <Route exact path={AppRoute.Reviews}>
          <Reviews film={film} setActiveTab={setActiveTab}/>
        </Route>
        <Route  exact path={[AppRoute.Overview, AppRoute.Film]}>
          <Overview film={film} setActiveTab={setActiveTab}/>
        </Route>
      </Switch>
    </div>
  );
}

export default FilmCardTabs;
