import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};

function PrivateRoute({ exact, path, render }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);
  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        authorizationStatus === AuthorizationStatus.Auth ? (
          render()
        ) : (
          <Redirect to={AppRoute.SignIn} />
        )}
    />
  );
}

export default PrivateRoute;
