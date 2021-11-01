import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <Fragment>
      <h1>server respond 404</h1>
      <p>Can&apos;t find the page</p>
      <Link to="/">GO to the Home page</Link>
    </Fragment>
  );
}

export default Page404;
