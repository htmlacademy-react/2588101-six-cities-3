import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer';
import {Review} from '../types/review';

const changeActiveCity = createAction<{activeCity: City}>('changeActiveCity');
const initOffers = createAction<Offer[]>('initOffers');
const initReviews = createAction<{reviews: Review[]}>('initReviews');

export {changeActiveCity, initOffers, initReviews};
