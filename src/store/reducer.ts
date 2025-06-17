import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, initOffers} from './action';
import {City, Offer} from '../types/offer';
import {CITIES} from '../mocks/cities';

type StateType = {
activeCity: City;
offers: Offer[];
};

const initialState: StateType = {
  activeCity: CITIES[0],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      const {activeCity} = action.payload;
      state.activeCity = activeCity;
    })
    .addCase(initOffers, (state, action) => {
      const {offers} = action.payload;
      state.offers = offers;
    });
});

export {reducer};
