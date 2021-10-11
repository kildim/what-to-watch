import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import {CatalogProps} from '../../types/catalogProps';

// const cards: number[] = Array(9).fill(0).map((value, index) => index);

function Catalog({films}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogFilmsList films={films.slice(9)} />
    </section>
  );
}

export default Catalog;
