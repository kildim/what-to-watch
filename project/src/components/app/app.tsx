import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import Review from '../review/review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string,
  genre: string,
  release: string
}

function App({title, genre, release}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            title={title}
            genre={genre}
            release={release}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.Movie}>
          <Film/>
        </Route>
        <Route exact path={AppRoute.Review}>
          <Review/>
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList/>
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <SignIn />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
