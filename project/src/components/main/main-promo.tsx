import { FilmType } from '../../types/types';
import PlayFilm from '../play-film/play-film';
import AddMyList from '../add-my-list/add-my-list';
import {memo} from 'react';

type MainPromoPropsType = {
  film: FilmType;
};

function MainPromo(props: MainPromoPropsType): JSX.Element {
  const { film } = props;

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src={film.posterImage}
            alt={`${film.name} poster`}
            width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{film.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film.genre}</span>
            <span className="film-card__year">{film.released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayFilm />
            <AddMyList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainPromo);
