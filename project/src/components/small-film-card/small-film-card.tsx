import {Link, useHistory} from 'react-router-dom';
import {Film} from '../../types/film';
import {useEffect, useRef, useState} from 'react';

type SmallFilmcardProps = {
  film: Film,
}


function SmallFilmCard({film}: SmallFilmcardProps): JSX.Element {
  const filmPath = `/films/${film.id}`;

  const [isPlaying, setIsPlaying] = useState(false);
  const history = useHistory();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  const handleClick = () => {
    history.push(filmPath);
  };

  const stopPlay = (video: HTMLVideoElement | null): void => {
    if (video) {
      video.load();
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isPlaying) {
      timeout = setTimeout(() => videoRef.current?.play(), 1000);
    } else {
      stopPlay(videoRef.current);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isPlaying]);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="small-film-card__image">
        <video
          poster={film.posterImage}
          src={film.previewVideoLink}
          ref={videoRef}
          preload="none"
          loop
          muted
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmPath}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
