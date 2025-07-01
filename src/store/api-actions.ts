import {createAppAsyncThunk} from '../hooks/types';
import {Offer, FullOffer, FavoritesData} from '../types/offer';
import {Review, PostReview} from '../types/review';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../const';
import {saveToken, dropToken} from '../services/token';

export const fetchAllOffers = createAppAsyncThunk<Offer[], undefined>(
  'fetchAllOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFullOffer = createAppAsyncThunk<FullOffer, string>(
  'fetchFullOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchNearbyOffers = createAppAsyncThunk<Offer[], string>(
  'fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavorites = createAppAsyncThunk<Offer, FavoritesData>(
  'fetchFavorites',
  async ({id, isFavorite}, {extra: api}) => {
    const number = Number(isFavorite);
    const {data} = await api.post<FullOffer>(`${APIRoute.Favorites}/${id}/${number}`, {number});
    return data;
  },
);

export const fetchReviews = createAppAsyncThunk<Review[], FullOffer['id']>(
  'fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const postReviews = createAppAsyncThunk<Review, PostReview>(
  'postReviews',
  async ({body, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, body);
    return data;
  },
);

export const checkAuth = createAppAsyncThunk<UserData, undefined>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const login = createAppAsyncThunk<UserData, AuthData>(
  'login',
  async (body, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, body);
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logout = createAppAsyncThunk<void, undefined>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
