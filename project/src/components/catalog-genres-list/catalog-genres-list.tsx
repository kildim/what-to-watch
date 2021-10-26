import { GenreType, StateType } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { Dispatch } from '@reduxjs/toolkit';
import { ActionType } from '../../types/action';
import {setGenre} from '../../store/action';
import classNames from 'classnames';

const mapStateToProps = ({ genre, films, genres }: StateType) => ({
  genre,
  films,
  genres,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  handleChangeGenre(event: any) {
    event.preventDefault();
    dispatch(setGenre(event.target.textContent));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> | Record<string, never>;

function CatalogGenresList(props: PropsFromRedux): JSX.Element {
  const { genres, handleChangeGenre, genre } = props;
  const { url } = useRouteMatch();

  if (genres === undefined) {
    throw new Error('Пустой список жанров');
  }

  const listItems = genres.map((genreLoopCurrent: GenreType) => (
    <li
      key={genreLoopCurrent.dataLabel}
      className={classNames('catalog__genres-item', {'catalog__genres-item--active': genre === genreLoopCurrent.genre})}
    >
      <Link
        to={`${url}${genreLoopCurrent.dataLabel}`}
        className={'catalog__genres-link'}
        onClick={handleChangeGenre}
      >
        {genreLoopCurrent.genre}
      </Link>
    </li>
  ));

  return <ul className="catalog__genres-list">{listItems}</ul>;
}

export { CatalogGenresList };
export default connector(CatalogGenresList);
