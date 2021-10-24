import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignIn from '../sign-in/sign-in';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import Film from '../film/film';
import Review from '../review/review';
import MyList from '../my-list/my-list';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route path={AppRoute.Film}>
          <Film />
        </Route>
        <Route exact path={AppRoute.Review}>
          <Review />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList />
        </Route>
        <Route
          exact
          path={AppRoute.Player}
          // render={(routeProps) => (
          //   <Player film={films[Number(routeProps.match?.params.id)]} />
          // )}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <SignIn />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
