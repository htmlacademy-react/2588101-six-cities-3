import {FullOffer} from './offer';

export type User = {
 name: string;
 avatarUrl: string;
 isPro: boolean;
}

export type Review = {
 id: string;
 date: string;
 user: User;
 comment: string;
 rating: number;
};

export type Body = {
  comment: string;
  rating: number;
}

export type PostReview = {
  body: Body;
  offerId: FullOffer['id'] | undefined;
}
