import {generatePath, Link, useHistory} from 'react-router-dom';
import {FilmType} from '../../types/types';
import {useEffect, useRef, useState} from 'react';
import {AppRoute} from '../../const';

type SmallFilmcardProps = {
  film: FilmType,
}


function SmallFilmCard({film}: SmallFilmcardProps): JSX.Element {
  const filmPath = generatePath(AppRoute.Film, {id: film.id});

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

  const videoStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="small-film-card__image">
        <video
          poster={film.previewImage}
          src={film.previewVideoLink}
          ref={videoRef}
          preload="none"
          style={videoStyle}
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
