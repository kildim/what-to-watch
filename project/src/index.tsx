import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import { createAPI } from './services/api';
import { setAuthorizationStatus } from './store/action';
import { AuthorizationStatus } from './const';
import { ThunkAppDispatch } from './types/action';
import {
  checkAuthAction,
  fetchFavorites,
  fetchFilmsAction
} from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reducer} from './store/reducer';

const api = createAPI(() => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());
(store.dispatch as ThunkAppDispatch)(fetchFavorites());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


