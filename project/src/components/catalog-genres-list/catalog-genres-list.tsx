import {GenreType, StateType} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({genre, films, genres}: StateType) => ({
  genre,
  films,
  genres,
});

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector> | Record<string, never>;

function CatalogGenresList(props: PropsFromRedux): JSX.Element {
  const {genres} = props;

  // eslint-disable-next-line no-console
  console.log(genres);

  if (genres === undefined) {
    throw new Error('Пустой список жанров');
  }

  const listItems = genres.map((genre: GenreType) => <li key={genre.dataLabel}>{genre.genre}</li>);

  return (
    <ul className="catalog__genres-list">
      {listItems}
    </ul>
  );
}

export {CatalogGenresList};
export default connector(CatalogGenresList);
