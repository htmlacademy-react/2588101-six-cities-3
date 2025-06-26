import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {FullOffer} from '../../types/offer';

export const getFullOffer = (state: State): FullOffer | null => state[NameSpace.Offer].info;
export const getOfferStatus = (state: State): RequestStatus => state[NameSpace.Offer].status;
