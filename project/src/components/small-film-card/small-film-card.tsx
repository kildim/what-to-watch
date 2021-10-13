import {SmallFilmcardProps} from '../../types/smallFilmcardProps';
import {Link} from 'react-router-dom';

function SmallFilmCard({movie}: SmallFilmcardProps): JSX.Element {
  const filmPath = `/films/${movie.id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={movie.previewImage}
          alt={movie.name} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        {/*<a className="small-film-card__link" href="film-page.html">{film.name}</a>*/}
        <Link className="small-film-card__link" to={filmPath}>{movie.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
