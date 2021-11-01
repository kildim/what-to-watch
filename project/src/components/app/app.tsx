import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Main from '../main/main';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../sign-in/sign-in';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import Film from '../film/film';
import Review from '../review/review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import {StateType} from '../../types/state';
import {isCheckedAuth} from '../../utils/utils';


const mapStateToProps = ({authorizationStatus, isDataLoaded}: StateType) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn/>
        </Route>
        <Route path={AppRoute.Film}>
          <Film/>
        </Route>
        <Route exact path={AppRoute.Review}>
          <Review/>
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList/>
        </Route>
        <Route
          exact
          path={AppRoute.Player}
          render={(routeProps) => (
            <Player/>
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <SignIn/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
