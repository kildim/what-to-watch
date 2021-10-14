import { useState } from 'react';

import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type CatalogFilmsListProps = {
  films: Film[]
}

function CatalogFilmsList({ films }: CatalogFilmsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => (
        <SmallFilmCard key={film.id} movie={film} />
      ))}
    </div>
  );
}

export default CatalogFilmsList;
