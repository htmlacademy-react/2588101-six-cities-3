import {NameSpace, RequestStatus} from '../../const';
import {State} from '../../types/state';
import {Review} from '../../types/review';

export const getReviews = (state: State): Review[] => state[NameSpace.Review].reviews;
export const getReviewsStatus = (state: State): RequestStatus => state[NameSpace.Review].status;
