import { Route, Router as BrowserRouter, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Main from '../main/main';
import { AppRoute } from '../../const';
import SignIn from '../sign-in/sign-in';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import Review from '../review/review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import Film from '../film/film';
import browserHistory from '../../browser-history';
import {getIsFilmsDataLoading} from '../../store/reducers/status-reducer/selectors';

function App(): JSX.Element {
  const isFilmsDataLoading = useSelector(getIsFilmsDataLoading);

  if (isFilmsDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main} render={() => <Main />} />
        <Route exact path={AppRoute.SignIn} render={() => <SignIn />} />
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <Review />}
        />
        <Route exact path={AppRoute.Page404} render={() => <Page404 />} />
        <Route path={AppRoute.Film} render={() => <Film />} />
        <PrivateRoute exact path={AppRoute.MyList} render={() => <MyList />} />
        <Route exact path={AppRoute.Player} render={() => <Player />} />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <MyList />}
        />
        <Route render={() => <Page404 />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

