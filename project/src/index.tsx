import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const actualFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={actualFilm.TITLE}
      genre={actualFilm.GENRE}
      release={actualFilm.RELEASE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
