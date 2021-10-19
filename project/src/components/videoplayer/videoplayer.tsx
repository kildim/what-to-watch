import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film;
};

function VideoPlayer({ film }: VideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseOver = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  const stopPlay = (video: HTMLVideoElement | null): void => {
    if (video) {
      video.pause();
      video.currentTime = 0;
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
    <div
      className="small-film-card__image"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <video
        poster={film.posterImage}
        src={film.previewVideoLink}
        ref={videoRef}
        preload="none"
        loop
        muted
      />
    </div>
  );
}

export default VideoPlayer;
