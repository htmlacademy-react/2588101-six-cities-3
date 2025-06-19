import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, initOffers, initReviews, setError} from './action';
import {City, Offer} from '../types/offer';
import {Review} from '../types/review';
import {CITIES} from '../const';

type StateType = {
activeCity: City;
offers: Offer[];
reviews: Review[];
error: string | null;
};

const initialState: StateType = {
  activeCity: CITIES[0],
  offers: [],
  reviews: [],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      const {activeCity} = action.payload;
      state.activeCity = activeCity;
    })
    .addCase(initOffers, (state, action) => {
      const offers = action.payload;
      state.offers = offers;
    })
    .addCase(initReviews, (state, action) => {
      const {reviews} = action.payload;
      state.reviews = reviews;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
