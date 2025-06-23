import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeActiveCity = createAction<{activeCity: City}>('changeActiveCity');
export const initOffers = createAction<Offer[]>('initOffers');
export const initReviews = createAction<{reviews: Review[]}>('initReviews');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
