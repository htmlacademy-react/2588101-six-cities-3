import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getAllOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getAllOffersStatus = (state: State): RequestStatus => state[NameSpace.Data].status;
