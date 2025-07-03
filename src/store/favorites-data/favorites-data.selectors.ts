import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getFavorites = (state: State): Offer[] => state[NameSpace.Favorite].items;
export const getFavoriteStatus = (state: State): RequestStatus => state[NameSpace.Favorite].status;
