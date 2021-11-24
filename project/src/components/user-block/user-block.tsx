import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useHistory } from 'react-router-dom';
import { getAuthStatus } from '../../store/reducers/auth-reducer/selectors';
import { getUserInfo } from '../../store/reducers/data-reducer/selectors';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);
  const userInfo = useSelector(getUserInfo);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOutClick = () => dispatch(logoutAction());
  const handleAvatarClick = () => history.push(AppRoute.MyList);

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth && userInfo && (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={userInfo.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
                onClick={handleAvatarClick}
              />
            </div>
          </li>
          <li className="user-block__item">
            <p
              className="user-block__link"
              onClick={handleLogOutClick}
            >
              Sign out
            </p>
          </li>
        </>
      )}
      {authorizationStatus !== AuthorizationStatus.Auth && (
        <li className="user-block__item">
          <a className="user-block__link" href={AppRoute.SignIn}>
            Sign in
          </a>
        </li>
      )}
    </ul>
  );
}

export default UserBlock;
