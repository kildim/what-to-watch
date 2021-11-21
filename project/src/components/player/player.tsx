import { StateType } from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import Page404 from '../page-404/page-404';
import {useEffect, useRef, useState} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {formatRemainingTime} from '../../utils/utils';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({ genre, films }: StateType) => ({
  genre,
  films,
});
const connector = connect(mapStateToProps);

function Player(props: PropsFromRedux): JSX.Element {
  const { films } = props;

  const { id } = useParams<{ id?: string }>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const {current: videoElement} = videoRef;
  const progressBarRef = useRef<HTMLProgressElement>(null);
  const {current: progressBarElement} = progressBarRef;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [{duration, remainingTime}, setDuration] = useState({duration: 0, remainingTime: 0});
  const history = useHistory();

  useEffect(() => {
    if (!videoElement) {
      return;
    }
    isPlaying ? videoElement.play() : videoElement.pause();
  }, [isPlaying, videoElement]);

  useEffect(() => {
    if (!videoElement) {
      return;
    }

    const videoDuration = Math.round(videoElement.duration);

    setDuration((state) => ({
      ...state, duration: videoDuration, remainingTime: videoDuration,
    }));
  }, [isVideoLoading, videoElement]);

  if (id === undefined) {
    return <Page404 />;
  }

  const RemainingMovieTime = !isVideoLoading ? formatRemainingTime(remainingTime) : '';

  const handlePlayClick = () => {
    setIsPlaying((prevState) => !prevState);
  };
  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };
  const handlePlaybackPosition = () => {
    if (!videoElement || !progressBarElement) {
      return;
    }

    const currentVideoTime = videoElement.currentTime;
    const currentPercentage = currentVideoTime / duration * 100;
    const currentRemainingTime = Math.round(duration * (100 - currentPercentage) / 100);

    setDuration((state) => ({
      duration: state.duration, remainingTime: currentRemainingTime,
    }));
    setCurrentTime(currentPercentage);
    progressBarElement.value = currentVideoTime;
  };

  const film = films.find((movie) => movie.id === Number(id));

  if (film === undefined) {
    return <Page404 />;
  }

  const handleFullscreenClick = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  const handleExitClick = () => history.go(-1);

  return (
    <div className="player">
      {isVideoLoading && <LoadingScreen />}
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.posterImage}
        ref={videoRef}
        onLoadedData={handleVideoLoaded}
        onTimeUpdate={handlePlaybackPosition}
      />

      <button type="button" className="player__exit" onClick={handleExitClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" max={duration} ref={progressBarRef}/>
            <div className="player__toggler" style={{left: `${currentTime}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{RemainingMovieTime}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayClick}
          >
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause" />
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>
            )}
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullscreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export  {Player};
export default connector(Player);
