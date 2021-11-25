import PlayFilm from '../play-film/play-film';
import AddMyList from '../add-my-list/add-my-list';
import {memo} from 'react';
import Page404 from '../page-404/page-404';
import {FilmType} from '../../types/types';

type MainPromoPropsType = {
  promo: FilmType;
}

function MainPromo({promo}: MainPromoPropsType): JSX.Element {
  if (!promo) {
    return <Page404 />;
  }

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src={promo.posterImage}
            alt={`${promo.name} poster`}
            width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promo.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promo.genre}</span>
            <span className="film-card__year">{promo.released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayFilm film={promo}/>
            <AddMyList film={promo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainPromo);
