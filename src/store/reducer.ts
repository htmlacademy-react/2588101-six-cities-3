import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, initOffers} from './action';
import {Offer} from '../types/offer';
import {citiesList} from '../const';

type StateType = {
activeCity: string;
offers: Offer[];
};

const initialState: StateType = {
  activeCity: citiesList[0],
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
