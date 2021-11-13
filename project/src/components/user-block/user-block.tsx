import {connect, ConnectedProps} from 'react-redux';
import {StateType} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({authorizationStatus, userInfo}: StateType) => ({
  authorizationStatus, userInfo,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, userInfo} = props;

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth && (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={userInfo.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </>
      )}
      {authorizationStatus !== AuthorizationStatus.Auth && (
        <li className="user-block__item">
          <a className="user-block__link">Sign in</a>
        </li>
      )}
    </ul>
  );
}

export {UserBlock};
export default connector(UserBlock);
