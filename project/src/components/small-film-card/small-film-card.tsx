import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

type SmallFilmcardProps = {
  film: Film,
}

function SmallFilmCard({film}: SmallFilmcardProps): JSX.Element {
  const filmPath = `/films/${film.id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage}
          alt={film.name} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmPath}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
