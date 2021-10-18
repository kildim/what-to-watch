import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film;
};

function VideoPlayer({ film }: VideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(isPlaying);
    // videoRef.current?.pause();
    isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  }, [isPlaying]);

  return (
    <video
      muted
      poster={film.posterImage}
      src={film.previewVideoLink}
      ref={videoRef}
      onClick={() => setIsPlaying(!isPlaying)}
    />
  );
}

export default VideoPlayer;
