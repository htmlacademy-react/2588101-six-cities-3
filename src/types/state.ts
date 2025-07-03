import {store} from '../store/index';
import {AuthorizationStatus, RequestStatus} from '../const';
import {Offer, FullOffer, City} from '../types/offer';
import {Review} from '../types/review';
import {UserData} from '../types/user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  info: UserData | null;
  status: RequestStatus;
};

export type AppProcess = {
activeCity: City;
};

export type AppData = {
  offers: Offer[];
  status: RequestStatus;
};

export type ReviewsData = {
  reviews: Review[];
  status: RequestStatus;
};

export type FullOfferData = {
  info: FullOffer | null;
  nearby: Offer[];
  status: RequestStatus;
  activeOfferId?: Offer['id'] | null;
};

export type FavoriteData = {
  items: Offer[];
  status: RequestStatus;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
