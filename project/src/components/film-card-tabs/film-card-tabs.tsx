import { Link } from 'react-router-dom';
import { FilmType } from '../../types/types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AppRoute } from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';

type FilmCardTabsProps = {
  film: FilmType;
};

function FilmCardTabs({ film }: FilmCardTabsProps): JSX.Element {
  const { url } = useRouteMatch();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={'film-nav__item'}>
            <Link to={`${url}/overview`} className="film-nav__link">
              Overview
            </Link>
          </li>
          <li className={'film-nav__item'}>
            <Link to={`${url}/details`} className="film-nav__link">
              Details
            </Link>
          </li>
          <li className={'film-nav__item'}>
            <Link to={`${url}/reviews`} className="film-nav__link">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={AppRoute.Details}>
          <DetailsTab film={film} />
        </Route>
        <Route exact path={AppRoute.Reviews}>
          <ReviewsTab film={film} />
        </Route>
        <Route exact path={[AppRoute.Overview, AppRoute.Film]}>
          <OverviewTab film={film} />
        </Route>
      </Switch>
    </div>
  );
}

export default FilmCardTabs;
