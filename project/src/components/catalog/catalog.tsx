import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import { FilmType } from '../../types/types';

type CatalogProps = {
  films: FilmType[];
};

function Catalog({ films }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogFilmsList films={films} />
    </section>
  );
}

export default Catalog;
