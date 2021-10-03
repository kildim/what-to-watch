import SmallFilmCard from '../small-film-card/small-film-card';

const cards: number[] = Array(9).fill(0).map((value, index) => index);

function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        {cards.map((card) => <SmallFilmCard key={card}/>)}
      </div>
    </section>
  );
}

export default Catalog;
