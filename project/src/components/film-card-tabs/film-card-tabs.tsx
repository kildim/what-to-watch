import { generatePath, Link, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { StateType } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';

enum Tab {
  Overview,
  Details,
  Reviews,
}

const mapStateToProps = ({ film }: StateType) => ({
  film,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmCardTabs({ film }: PropsFromRedux): JSX.Element {
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
        <Route exact path={[AppRoute.Overview, AppRoute.Film]} render={() => <OverviewTab />} />
        <Route exact path={AppRoute.Details} render={() => <DetailsTab />} />
        <Route exact path={AppRoute.Reviews} render={() => <ReviewsTab />} />
      </Switch>
    </div>
  );
}

export { FilmCardTabs };
export default connector(FilmCardTabs);
