import { Link } from 'react-router-dom';
import { FilmType } from '../../types/types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {AppRoute} from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import {useEffect, useState} from 'react';
import classNames from 'classnames';

type FilmCardTabsProps = {
  film: FilmType;
};

enum Tab {
  Overview,
  Details,
  Reviews,
}

function FilmCardTabs({ film }: FilmCardTabsProps): JSX.Element {
  const { url } = useRouteMatch();
  const [activeTab, setActiveTab] = useState(Tab.Overview);

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

  useEffect(() => setActiveTab(Tab.Overview), [film.id]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={overviewNavLinkClass}>
            <Link
              to={url}
              className="film-nav__link"
              onClick={handleOverviewNavLinkClick}
            >
              Overview
            </Link>
          </li>
          <li className={detailsNavLinkClass}>
            <Link
              to={`${url}/details`}
              className="film-nav__link"
              onClick={handleDetailsNavLinkClick}
            >
              Details
            </Link>
          </li>
          <li className={reviewsNavLinkClass}>
            <Link
              to={`${url}/reviews`}
              className="film-nav__link"
              onClick={handleReviewsNavLinkClick}
            >
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
          <ReviewsTab />
        </Route>
        <Route exact path={AppRoute.Film}>
          <OverviewTab film={film} />
        </Route>
      </Switch>
    </div>
  );
}

export default FilmCardTabs;
