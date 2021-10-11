import {Film} from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';
import {CatalogFilmsListProps} from '../../types/catalogFilmsList';
import {useState} from 'react';

function CatalogFilmsList({films}: CatalogFilmsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedIndex, setSelectedIndex ] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => <SmallFilmCard key={film.id} image={film.previewImage} name={film.name}/>)}
    </div>
  );
}

export default CatalogFilmsList;
