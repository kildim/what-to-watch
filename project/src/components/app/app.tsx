import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignIn from '../sign-in/sign-in';
import Film from '../film/film';
import Review from '../review/review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import { FilmType as FilmType } from '../../types/types';

type AppProps = {
  title: string;
  genre: string;
  release: string;
  films: FilmType[];
};

function App({ title, genre, release, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main title={title} genre={genre} release={release} films={films} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route
          path={AppRoute.Film}
          render={(routeProps) => (
            <Film film={films[Number(routeProps.match?.params.id)]} />
          )}
        />
        <Route
          exact
          path={AppRoute.Review}
          render={(routeProps) => (
            <Review film={films[Number(routeProps.match?.params.id)]} />
          )}
        />
        <Route exact path={AppRoute.MyList}>
          <MyList films={films} />
        </Route>
        <Route
          exact
          path={AppRoute.Player}
          render={(routeProps) => (
            <Player film={films[Number(routeProps.match?.params.id)]} />
          )}
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
