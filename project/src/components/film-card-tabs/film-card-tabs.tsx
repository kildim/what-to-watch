import {
  generatePath,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { AppRoute } from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import {useEffect, useState} from 'react';
import classNames from 'classnames';
import { CommentType, FilmType } from '../../types/types';

enum Tab {
  Overview,
  Details,
  Reviews,
}

type FilmCardTabsProps = {
  film: FilmType;
  comments: CommentType[];
};

function FilmCardTabs({ film, comments }: FilmCardTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(Tab.Overview);

  useEffect(() => setActiveTab(Tab.Overview), [film]);

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
          render={() => <ReviewsTab comments={comments} />}
        />
      </Switch>
    </div>
  );
}

export default FilmCardTabs;
