import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer';

const changeActiveCity = createAction<{activeCity: City}>('changeActiveCity');
const initOffers = createAction<{offers: Offer[]}>('initOffers');

export {changeActiveCity, initOffers};
