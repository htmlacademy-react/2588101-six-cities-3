import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, initOffers, initReviews, setError, setOffersLoadingStatus, requireAuthorization} from './action';
import {City, Offer} from '../types/offer';
import {Review} from '../types/review';
import {CITIES, AuthorizationStatus} from '../const';

type StateType = {
 activeCity: City;
 offers: Offer[];
 reviews: Review[];
 error: string | null;
 isOffersDataLoading: boolean;
 authorizationStatus: AuthorizationStatus;
};

const initialState: StateType = {
  activeCity: CITIES[0],
  offers: [],
  reviews: [],
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
