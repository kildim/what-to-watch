import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createAPI } from './services/api';
import { setAuthorizationStatus } from './store/action';
import { AuthorizationStatus } from './const';
import { ThunkAppDispatch } from './types/action';
import {
  checkAuthAction,
  fetchFilmsAction
} from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {rootReducer} from './store/root-reducer';

const api = createAPI(() => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


