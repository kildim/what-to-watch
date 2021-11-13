function UserBlock(): JSX.Element {
  const genSignLinkListItem = () => (
    <li className="user-block__item">
      <a className="user-block__link">Sign out</a>
    </li>
  );
  const genAvatarListItem = () => (
    <li className="user-block__item">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
      </div>
    </li>
  );
  return (
    <ul className="user-block">
      {genAvatarListItem()}
      {genSignLinkListItem()}
    </ul>
  );
}

export default UserBlock;
