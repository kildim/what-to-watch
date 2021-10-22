// import { useState } from 'react';

import { FilmType } from '../../types/types';
import SmallFilmCard from '../small-film-card/small-film-card';

type CatalogFilmsListProps = {
  films: FilmType[]
}

function CatalogFilmsList({ films }: CatalogFilmsListProps): JSX.Element {
  // const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film: FilmType) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default CatalogFilmsList;
