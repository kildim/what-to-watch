import {GenreType, StateType} from '../../types/state';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {setGenre} from '../../store/action';
import classNames from 'classnames';
import React, {MouseEvent} from 'react';

const mapStateToProps = ({DATA}: StateType) => ({
  genre: DATA.genre,
  films: DATA.films,
  genres: DATA.genres,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const constructLiClassName = (genre: string, currentGenre: string): string =>
  classNames('catalog__genres-item', {
    'catalog__genres-item--active': genre === currentGenre,
  });

function CatalogGenresList(props: PropsFromRedux): JSX.Element {
  const {genres, genre} = props;
  const dispatch = useDispatch();

  const handleChangeGenre = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const genreName = target.textContent;
    if (genreName) {
      dispatch(setGenre(genreName));
    }
  };

  if (!genres) {
    return <div>Unknown genre</div>;
  }

  const listItems = genres.map((currentGenre: GenreType) => (
    <li
      key={currentGenre}
      className={constructLiClassName(genre, currentGenre)}
    >
      <a className="catalog__genres-link" onClick={handleChangeGenre} href='/'>
        {currentGenre}
      </a>
    </li>
  ));

  return <ul className="catalog__genres-list">{listItems}</ul>;
}

export {CatalogGenresList};
export default connector(CatalogGenresList);
