import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {films} from './mocks/films';

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
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
