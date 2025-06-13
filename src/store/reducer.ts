import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, initOffers} from './action';
import {Offer} from '../types/offer';

type StateType = {
activeCity: string;
offers: Offer[];
};

const initialState: StateType = {
  activeCity: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(initOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
