import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

const changeActiveCity = createAction<{activeCity: string}>('changeActiveCity');
const initOffers = createAction<{offers: Offer[]}>('initOffers');

export {changeActiveCity, initOffers};
