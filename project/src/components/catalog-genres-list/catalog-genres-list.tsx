import { GenreType, StateType } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { ActionType } from '../../types/action';
import { setGenre } from '../../store/action';
import classNames from 'classnames';
import React, { MouseEvent } from 'react';

const mapStateToProps = ({ genre, films, genres }: StateType) => ({
  genre,
  films,
  genres,
});

type Genre = string;

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  onChangeGenre: (genre: Genre) => dispatch(setGenre(genre)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const constructLiClassName = (genre: string, currentGenre: string): string => classNames('catalog__genres-item', {
  'catalog__genres-item--active': genre === currentGenre,
});

function CatalogGenresList(props: PropsFromRedux): JSX.Element {
  const { genres, onChangeGenre, genre } = props;

  const handleChangeGenre = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const genreName = target.textContent;
    if (genreName) {
      onChangeGenre(genreName);
    }
  };

  if (genres === undefined) {
    return <div>Unknown genre</div>;
  }

  const listItems = genres.map((currentGenre: GenreType) => (
    <li
      key={currentGenre}
      className={constructLiClassName(genre, currentGenre)}
    >
      <a className="catalog__genres-link" onClick={handleChangeGenre}>
        {currentGenre}
      </a>
    </li>
  ));

  return <ul className="catalog__genres-list">{listItems}</ul>;
}

export { CatalogGenresList };
export default connector(CatalogGenresList);
