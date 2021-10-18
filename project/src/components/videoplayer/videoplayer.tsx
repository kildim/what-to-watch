import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film;
};

function VideoPlayer({ film }: VideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEmerging = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isPlaying) {
      timeout = setTimeout(() => videoRef.current?.play(), 1000);
    } else {
      videoRef.current?.load();
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isPlaying]);

  return (
    <div
      className="small-film-card__image"
      onMouseOver={handleMouseEmerging}
      onMouseLeave={handleMouseEmerging}
    >
      <video
        muted
        poster={film.posterImage}
        src={film.previewVideoLink}
        ref={videoRef}
        preload={'none'}
        loop
      />
    </div>
  );
}

export default VideoPlayer;
