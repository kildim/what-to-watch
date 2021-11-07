import {
  generatePath,
  Link,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import { AppRoute } from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import { useState } from 'react';
import classNames from 'classnames';
import { FilmType } from '../../types/types';

enum Tab {
  Overview,
  Details,
  Reviews,
}

type FilmCardProps = {
  film: FilmType;
};

const useCatchActiveTab = () => {
  let result;
  if (useRouteMatch(AppRoute.Overview)?.isExact) {
    result = Tab.Overview;
  }
  if (useRouteMatch(AppRoute.Details)?.isExact) {
    result = Tab.Details;
  }
  if (useRouteMatch(AppRoute.Reviews)?.isExact) {
    result = Tab.Reviews;
  }
  return result;
};

function FilmCardTabs({ film }: FilmCardProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(useCatchActiveTab);

  const overviewNavLinkClass = classNames('film-nav__item', {
    'film-nav__item--active': activeTab === Tab.Overview,
  });
  const detailsNavLinkClass = classNames('film-nav__item', {
    'film-nav__item--active': activeTab === Tab.Details,
  });
  const reviewsNavLinkClass = classNames('film-nav__item', {
    'film-nav__item--active': activeTab === Tab.Reviews,
  });

  const handleOverviewNavLinkClick = () => setActiveTab(Tab.Overview);
  const handleDetailsNavLinkClick = () => setActiveTab(Tab.Details);
  const handleReviewsNavLinkClick = () => setActiveTab(Tab.Reviews);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={overviewNavLinkClass}>
            <Link
              to={generatePath(AppRoute.Overview, { id: film.id })}
              className="film-nav__link"
              onClick={handleOverviewNavLinkClick}
            >
              Overview
            </Link>
          </li>
          <li className={detailsNavLinkClass}>
            <Link
              to={generatePath(AppRoute.Details, { id: film.id })}
              className="film-nav__link"
              onClick={handleDetailsNavLinkClick}
            >
              Details
            </Link>
          </li>
          <li className={reviewsNavLinkClass}>
            <Link
              to={generatePath(AppRoute.Reviews, { id: film.id })}
              className="film-nav__link"
              onClick={handleReviewsNavLinkClick}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route
          exact
          path={[AppRoute.Overview, AppRoute.Film]}
          render={() => <OverviewTab film={film} />}
        />
        <Route
          exact
          path={AppRoute.Details}
          render={() => <DetailsTab film={film} />}
        />
        <Route
          exact
          path={AppRoute.Reviews}
          render={() => <ReviewsTab comments={[]} />}
        />
      </Switch>
    </div>
  );
}

export default FilmCardTabs;
