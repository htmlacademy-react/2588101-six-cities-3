import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {Setting} from './const';
import {offers} from './mocks/offers';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placeCardCount = {Setting.PlaceCardCount}
        offers = {offers}
      />
    </Provider>
  </React.StrictMode>
);
