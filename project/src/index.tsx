import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/app/app';

import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import {setAuthorizationStatus, setIsDataLoaded} from './store/action';
import {AuthorizationStatus} from './const';
import {ThunkAppDispatch} from './types/action';
import {checkAuthAction, fetchFilmsAction, fetchPromoAction} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => {
    store.dispatch(setIsDataLoaded(true));
    store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());
(store.dispatch as ThunkAppDispatch)(fetchPromoAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));


