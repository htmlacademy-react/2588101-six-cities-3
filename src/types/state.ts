import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {Offer, City} from '../types/offer';
import {Review} from '../types/review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type AppProcess = {
activeCity: City;
};

export type AppData = {
  offers: Offer[];
  reviews: Review[];
  isOffersDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
