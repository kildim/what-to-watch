import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import {StateType} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import UserBlock from '../user-block/user-block';

const mapStateToProps = ({films}: StateType) => ({
  films,
});
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyList(props: PropsFromRedux): JSX.Element {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        {/*<ul className="user-block">*/}
        {/*  <li className="user-block__item">*/}
        {/*    <div className="user-block__avatar">*/}
        {/*      <img*/}
        {/*        src="img/avatar.jpg"*/}
        {/*        alt="User avatar"*/}
        {/*        width="63"*/}
        {/*        height="63"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="user-block__item">*/}
        {/*    <a className="user-block__link">Sign out</a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CatalogFilmsList films={films}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export  {MyList};
export default connector(MyList);
