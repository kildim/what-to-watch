import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Page404(props: any):JSX.Element {
  const {message} = props;
  return (
    <Fragment>
      <h1>server respond 404</h1>
      <p>{message()}</p>
      <Link to="/">GO to the Home page</Link>
    </Fragment>
  );
}

export default Page404;
