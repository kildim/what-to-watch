import {CSSProperties} from 'react';

const SPINNER_STYLE: CSSProperties = {
  position: 'absolute', top: '50%', left: '50%',
};

function LoadingScreen(): JSX.Element {

  return (
    <img src="img/spinner.gif" alt="Spinner" style={SPINNER_STYLE}/>
  );
}

export default LoadingScreen;
