import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/app/app';

import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {ThunkAppDispatch} from './types/action';
import {checkAuthAction, fetchFilmsAction} from './store/api-actions';
import {parseFilms} from './utils/adaptor';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(parseFilms)));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
