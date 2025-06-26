import {store} from '../store/index';
import {AuthorizationStatus, RequestStatus} from '../const';
import {Offer, FullOffer, City} from '../types/offer';
import {Review} from '../types/review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type AppProcess = {
activeCity: City;
};

export type AppData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
}

export type ReviewsData = {
  reviews: Review[];
  status: RequestStatus;
};

export type FullOfferData = {
  info: FullOffer | null;
  status: RequestStatus;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
